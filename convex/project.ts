import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    title: v.string(),
    subtitle: v.string(),
    location: v.optional(v.string()),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const project = await ctx.db.insert("project", args);
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
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const projects = await ctx.db.query("project").collect();

    if (args.category && args.category !== "todos") {
      return projects.filter((project) => project.category === args.category);
    }

    return projects;
  },
});

//TODO:EXCLUDE CURRENT PROJECT
export const recommendedProjects = query({
  args: { currentProjectId: v.id("project"), category: v.string() },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("project")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();

    return projects.filter((project) => project._id !== args.currentProjectId);
  },
});

// export const updateProject = mutation({
//   args: {
//     projectName: v.string(),
//     h2Title: v.optional(v.string()),
//     h2text: v.optional(v.string()),
//     h3title: v.optional(v.string()),
//     h3text: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     const { projectName, ...rest } = args;

//     const project = await ctx.db
//       .query("project")
//       .withIndex("by_name", (q) => q.eq("title", args.projectName))
//       .first();

//     if (!project) {
//       throw new Error("Project not found");
//     }

//     const projectResponse = await ctx.db.patch(project._id, {
//       ...rest,
//     });

//     return projectResponse;
//   },
// });
