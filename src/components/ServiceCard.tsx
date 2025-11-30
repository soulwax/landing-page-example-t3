"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  benefits: string[];
  ctaText: string;
  ctaAction: () => void;
  isEmergency?: boolean;
  gradient: string;
}

export function ServiceCard({
  title,
  icon,
  benefits,
  ctaText,
  ctaAction,
  isEmergency = false,
  gradient,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${gradient} p-8 h-full flex flex-col`}
    >
      {isEmergency && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          NOTFALL
        </div>
      )}
      
      <div className="text-5xl mb-4">{icon}</div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      
      <ul className="flex-1 space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-orange-500 mt-1">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={ctaAction}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
          isEmergency
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  );
}

