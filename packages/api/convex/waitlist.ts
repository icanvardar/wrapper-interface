import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitlist = mutation({
  args: {
    email: v.string(),
  },
  returns: v.id("waitlist"),
  handler: async (ctx, args) => {
    const existingEntry = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingEntry) {
      throw new Error("Email already exists in waitlist");
    }

    return await ctx.db.insert("waitlist", { email: args.email });
  },
});

export const listWaitlist = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("waitlist"),
      _creationTime: v.number(),
      email: v.string(),
    })
  ),
  handler: async (ctx, args) => {
    const entries = await ctx.db.query("waitlist").order("desc").collect();
    return entries;
  },
});

export const checkWaitlistStatus = query({
  args: {
    email: v.string(),
  },
  returns: v.boolean(),
  handler: async (ctx, args) => {
    const entry = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    return entry !== null;
  },
});
