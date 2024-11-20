import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: { projecId: v.id("project"), url: v.string() },
  handler: async (ctx, args) => {
    const response = await ctx.db.insert("image", {
      url: args.url,
      project: args.projecId,
    });
    return response;
  },
});

export const getByProject = query({
  args: { projectId: v.id("project") },
  handler: async (ctx, args) => {
    const images = await ctx.db
      .query("image")
      .withIndex("by_projecId", (q) => q.eq("project", args.projectId))
      .collect();

    return images;
  },
});
