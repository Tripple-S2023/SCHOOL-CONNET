import {
  news, inquiries, contactMessages,
  type InsertNews, type NewsItem,
  type InsertInquiry, type Inquiry,
  type InsertContactMessage, type ContactMessage
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // News
  getNews(): Promise<NewsItem[]>;
  getNewsItem(id: number): Promise<NewsItem | undefined>;
  createNews(item: InsertNews): Promise<NewsItem>;

  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Contact
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  private dbPromise: Promise<any>;

  constructor() {
    // lazily import the db so startup doesn't fail when DATABASE_URL is missing
    this.dbPromise = import("./db").then((m) => m.db);
  }

  private async db() {
    return await this.dbPromise;
  }

  async getNews(): Promise<NewsItem[]> {
    const db = await this.db();
    return await db.select().from(news).orderBy(desc(news.date));
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const db = await this.db();
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async createNews(item: InsertNews): Promise<NewsItem> {
    const db = await this.db();
    const [newItem] = await db.insert(news).values(item).returning();
    return newItem;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const db = await this.db();
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const db = await this.db();
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

class InMemoryStorage implements IStorage {
  private newsItems: NewsItem[] = [];
  private inquiries: Inquiry[] = [];
  private messages: ContactMessage[] = [];
  private idCounter = 1;

  async getNews(): Promise<NewsItem[]> {
    return this.newsItems.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    return this.newsItems.find((n) => n.id === id);
  }

  async createNews(item: InsertNews): Promise<NewsItem> {
    const newItem = { ...item, id: this.idCounter++ } as unknown as NewsItem;
    this.newsItems.push(newItem);
    return newItem;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const newInquiry = { ...inquiry, id: this.idCounter++ } as unknown as Inquiry;
    this.inquiries.push(newInquiry);
    return newInquiry;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage = { ...message, id: this.idCounter++ } as unknown as ContactMessage;
    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage: IStorage = process.env.DATABASE_URL ? new DatabaseStorage() : new InMemoryStorage();
