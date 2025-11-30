import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { contactRequests } from "@/server/db/schema";
import { contactFormSchema } from "@/lib/validations/contact";

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ ctx, input }) => {
      // TODO: Add rate limiting here (e.g., using Upstash Redis or similar)
      // Example: Check if IP has submitted more than 3 requests in the last hour

      const result = await ctx.db.insert(contactRequests).values({
        name: input.name,
        email: input.email,
        phone: input.phone ?? null,
        serviceType: input.serviceType,
        message: input.message,
      }).returning();

      // TODO: Send email notification to business owner
      // For demo purposes, log to console
      console.log("New contact request received:", {
        id: result[0]?.id,
        name: input.name,
        email: input.email,
        serviceType: input.serviceType,
      });

      return {
        success: true,
        id: result[0]?.id,
      };
    }),
});

