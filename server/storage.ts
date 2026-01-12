import { db } from "./db";
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
  async getNews(): Promise<NewsItem[]> {
    return await db.select().from(news).orderBy(desc(news.date));
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async createNews(item: InsertNews): Promise<NewsItem> {
    const [newItem] = await db.insert(news).values(item).returning();
    return newItem;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
