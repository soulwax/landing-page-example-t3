"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  service: string;
  rating: number;
  text: string;
  index: number;
}

export function Testimonial({
  name,
  service,
  rating,
  text,
  index,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-2xl ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 mb-4 flex-1 italic">&quot;{text}&quot;</p>
      
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
    </motion.div>
  );
}

