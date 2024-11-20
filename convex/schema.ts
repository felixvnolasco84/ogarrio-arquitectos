import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  WhatsAppContact: defineTable({
    receivedBy: v.string(),
  }),

  project: defineTable({
    title: v.string(),
    subtitle: v.string(),
    location: v.optional(v.string()),
    category: v.optional(v.string()),
  })
    .searchIndex("search_name", {
      searchField: "title",
      // filterFields:

      // filterFields: ["name"]
    })
    .index("by_name", ["title"])
    .index("by_category", ["category"])
    .index("by_category_title", ["category", "title"]),

  image: defineTable({
    url: v.string(),
    project: v.id("project"),
  }).index("by_projecId", ["project"]),
});
