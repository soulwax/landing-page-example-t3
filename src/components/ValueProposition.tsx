"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ValuePropositionProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function ValueProposition({
  icon,
  title,
  description,
  index,
}: ValuePropositionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

