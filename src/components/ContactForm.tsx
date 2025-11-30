"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { contactFormSchema, type ContactFormInput } from "@/lib/validations/contact";
import { api } from "@/trpc/react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMutation = api.contact.submit.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    try {
      await submitMutation.mutateAsync(data);
      toast.success("Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.");
      reset();
    } catch (error) {
      toast.error("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Kontaktieren Sie uns
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Max Mustermann"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="max.mustermann@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Telefon (optional)
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+49 123 456789"
          />
        </div>

        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service-Interesse *
          </label>
          <select
            id="serviceType"
            {...register("serviceType")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Bitte wählen...</option>
            <option value="ride">Fahrdienst</option>
            <option value="towing">Abschleppdienst</option>
            <option value="cleaning">Reinigung</option>
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.serviceType.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nachricht *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Beschreiben Sie Ihre Anfrage..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </motion.button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Geschäftszeiten
        </h3>
        <div className="space-y-2 text-gray-700">
          <p>Montag - Freitag: 8:00 - 20:00 Uhr</p>
          <p>Samstag: 9:00 - 18:00 Uhr</p>
          <p>Sonntag: Nach Vereinbarung</p>
        </div>
        
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="font-semibold text-red-800 mb-1">
            Notfall-Abschleppdienst:
          </p>
          <a
            href="tel:+495551234567"
            className="text-red-600 hover:text-red-700 font-semibold text-lg"
          >
            (555) 123-4567
          </a>
          <p className="text-sm text-red-700 mt-1">24/7 verfügbar</p>
        </div>
      </div>
    </motion.div>
  );
}

