import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  serviceType: z.enum(["ride", "towing", "cleaning"], {
    required_error: "Bitte wählen Sie einen Service",
  }),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

