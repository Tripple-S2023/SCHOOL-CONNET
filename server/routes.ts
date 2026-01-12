import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // News Routes
  app.get(api.news.list.path, async (req, res) => {
    const newsItems = await storage.getNews();
    res.json(newsItems);
  });

  app.get(api.news.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    const item = await storage.getNewsItem(id);
    if (!item) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json(item);
  });

  app.post(api.news.create.path, async (req, res) => {
    try {
      const input = api.news.create.input.parse(req.body);
      const item = await storage.createNews(input);
      res.status(201).json(item);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
    }
  });

  // Inquiry Routes
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
    }
  });

  // Contact Routes
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingNews = await storage.getNews();
  if (existingNews.length === 0) {
    const sampleNews = [
      {
        title: "Admissions Open for 2024/2025 Session",
        content: "DE PEAK SCHOOL is now accepting applications for the new academic session. Join our community of faith-driven excellence. We offer a comprehensive curriculum that balances academic rigor with moral instruction.",
        category: "News",
        date: new Date().toISOString().split('T')[0],
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
      },
      {
        title: "Annual Inter-House Sports Competition",
        content: "Get ready for an exciting display of talent and sportsmanship at our annual Inter-House Sports competition. All parents and guardians are invited to witness our students excel beyond the classroom.",
        category: "Event",
        date: new Date(Date.now() + 86400000 * 14).toISOString().split('T')[0], // 2 weeks from now
        imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
      },
      {
        title: "Cultural Day Celebration",
        content: "Celebrating our rich Nigerian heritage! Students will showcase traditional attires, food, and dances from various cultures, emphasizing our unity in diversity.",
        category: "Celebration",
        date: new Date(Date.now() + 86400000 * 30).toISOString().split('T')[0], // 1 month from now
        imageUrl: "https://images.unsplash.com/photo-1532153259564-a5f24f285202?auto=format&fit=crop&q=80"
      }
    ];

    for (const news of sampleNews) {
      await storage.createNews(news);
    }
  }
}
