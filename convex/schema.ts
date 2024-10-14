import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  WhatsAppContact: defineTable({
    receivedBy: v.string(),
  }),

  project: defineTable({
    name: v.string(),
    slug: v.string(),
    location: v.string(),
    service: v.string(),
    product: v.string(),
    extraData: v.string(),
    category: v.string(),
    description: v.string(),
    heroImage: v.string(),
    gallery: v.array(v.string()),
    metaTitle: v.string(),
    metaDescription: v.string(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_category_slug", ["category", "slug"]),
});
