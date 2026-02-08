import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.menu.list.path, async (_req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // Seed menu items if empty
  const existingMenu = await storage.getMenuItems();
  if (existingMenu.length === 0) {
    await storage.createMenuItem({
      name: "Madras Filter Coffee",
      description: "Authentic South Indian filter coffee with chicory.",
      price: "₹40",
      category: "Coffee",
      imageUrl: "https://images.unsplash.com/photo-1596952954288-517b1d6f21ee?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createMenuItem({
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: "₹120",
      category: "Coffee",
      imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createMenuItem({
      name: "Cold Brew",
      description: "Smooth, slow-steeped cold coffee.",
      price: "₹150",
      category: "Coffee",
      imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createMenuItem({
      name: "Masala Chai",
      description: "Spiced Indian tea brewed with milk.",
      price: "₹50",
      category: "Beverages",
      imageUrl: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800"
    });
     await storage.createMenuItem({
      name: "Chocolate Brownie",
      description: "Fudgy, rich chocolate brownie.",
      price: "₹90",
      category: "Snacks",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&q=80&w=800"
    });
  }

  return httpServer;
}
