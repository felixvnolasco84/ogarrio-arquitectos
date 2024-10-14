import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db
      .query("WhatsAppContact")
      .order("desc")
      .first();
    const message = "Hola, me gustaría recibir más informes.";
    if (lastContact?.receivedBy === "Cesar") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Anton" });
      return `https://wa.me/5620244047?text=${encodeURIComponent(message)}`;
    } else {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Cesar" });
      return `https://wa.me/5513842959?text=${encodeURIComponent(message)}`;
    }
  },
});

export const getById = query({
  args: { projectId: v.id("project") },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("project")
      .withIndex("by_id", (q) => q.eq("_id", args.projectId))
      .first();

    return projects;
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("project")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    return projects;
  },
});

export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("project")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();

    return projects;
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("project").collect();

    return projects;
  },
});

//TODO:EXCLUDE CURRENT PROJECT
export const recommendedProjects = query({
  args: { currentProjectSlug: v.string(), category: v.string() },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("project")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
      
    return projects.filter((project) => project.slug !== args.currentProjectSlug);
  },
});
