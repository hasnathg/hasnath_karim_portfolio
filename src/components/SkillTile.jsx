// src/components/SkillTile.jsx
import { motion } from "framer-motion";

export default function SkillTile({ name, Icon, delayMs = 0 }) {
  return (
    <motion.div
      className="relative rounded-2xl border border-base-300/70 bg-base-200/80
                 shadow-sm hover:shadow-md transition-all overflow-hidden
                 backdrop-blur group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (delayMs || 0) / 1000, type: "spring", stiffness: 140, damping: 16 }}
    >
      {/* shine on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -top-1/2 left-0 right-0 h-full blur-2xl bg-gradient-to-b from-white/5 to-transparent" />
      </div>

      <div className="flex flex-col items-center text-center gap-2 p-6">
        <div className="rounded-xl border border-base-300 bg-base-100 w-16 h-16 md:w-20 md:h-20
                        grid place-items-center transition-transform
                        group-hover:-translate-y-0.5 group-hover:shadow">
          {/* <Icon aria-hidden className="text-5xl float-slow group-hover:scale-105 transition-transform" /> */}
          <Icon aria-hidden className="text-4xl md:text-5xl group-hover:scale-105 transition-transform" />
        </div>
        <span className="font-medium mt-1">{name}</span>
      </div>
    </motion.div>
  );
}
