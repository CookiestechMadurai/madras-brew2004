import { db } from "./db";
import { menuItems, inquiries, type MenuItem, type InsertMenuItem, type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItem[]> {
    if (!db) return [];
    return await db.select().from(menuItems);
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    if (!db) throw new Error("Database not configured");
    const [newItem] = await db.insert(menuItems).values(item).returning();
    return newItem;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    if (!db) throw new Error("Database not configured");
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }
}

export const storage = new DatabaseStorage();
