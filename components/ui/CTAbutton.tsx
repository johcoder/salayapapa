"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  text: string;
}

export default function CTAButton({ href, text }: CTAButtonProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={href}>
        <motion.span
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 12px 30px rgba(251,191,36,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0px 0px 0px rgba(251,191,36,0.0)",
              "0px 0px 18px rgba(251,191,36,0.6)",
              "0px 0px 0px rgba(251,191,36,0.0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            inline-flex items-center gap-2
            px-7 py-3
            bg-amber-600
            text-black font-semibold
            rounded-xl
            tracking-wide
            shadow-lg
            hover:shadow-2xl
            transition-colors
          "
        >
          {text}
          <span className="text-xl">→</span>
        </motion.span>
      </Link>
    </motion.span>
  );
}
