import { pgTable, text, serial, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// News and Events
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(), // 'News', 'Event', 'Celebration'
  date: date("date").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertNewsSchema = createInsertSchema(news).omit({ id: true, createdAt: true });

// Admissions Enquiries
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  parentName: text("parent_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  studentName: text("student_name").notNull(),
  studentAge: text("student_age").notNull(),
  classOfInterest: text("class_of_interest").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });

// Contact Messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

// Types
export type NewsItem = typeof news.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;
