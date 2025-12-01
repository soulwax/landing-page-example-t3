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

      // Verify that the insert actually returned a row
      if (!result[0]) {
        throw new Error("Failed to create contact request");
      }

      const insertedRecord = result[0];

      // TODO: Send email notification to business owner
      // For demo purposes, log to console
      console.log("New contact request received:", {
        id: insertedRecord.id,
        name: input.name,
        email: input.email,
        serviceType: input.serviceType,
      });

      return {
        success: true,
        id: insertedRecord.id,
      };
    }),
});

