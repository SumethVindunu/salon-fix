import { pgTable, serial, varchar, text, timestamp, date, boolean } from "drizzle-orm/pg-core";

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  service: varchar("service", { length: 255 }).notNull(),
  preferredDate: date("preferred_date").notNull(),
  preferredTime: varchar("preferred_time", { length: 20 }).notNull(),
  message: text("message"),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  rating: serial("rating").notNull(),
  comment: text("comment").notNull(),
  service: varchar("service", { length: 255 }),
  isApproved: boolean("is_approved").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
