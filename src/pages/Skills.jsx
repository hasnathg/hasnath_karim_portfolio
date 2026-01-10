import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SkillTile from "../components/SkillTile";
import { skillsIconMap } from "../data/skills-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 16 } },
};

export default function Skills() {
  const categories = ["All", ...Object.keys(skillsIconMap)];
  const [active, setActive] = useState("All");

  // Flatten to { name, Icon, cat }
  const allItems = useMemo(
    () =>
      Object.entries(skillsIconMap).flatMap(([cat, items]) =>
        items.map((it) => ({ ...it, cat }))
      ),
    []
  );

  const visible = active === "All" ? allItems : allItems.filter((i) => i.cat === active);

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="opacity-80">A quick view of the technologies I use most.</p>
      </header>

      {/* Tabs */}
      <div className="tabs tabs-boxed w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${active === cat ? "tab-active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
            <span className="ml-2 badge badge-ghost">
              {cat === "All"
                ? allItems.length
                : skillsIconMap[cat]?.length ?? 0}
            </span>
          </button>
        ))}
      </div>

      {/* Grid (auto-fit keeps rows looking even) */}
      <motion.div
        className="grid grid-auto-fit gap-5"
        variants={container}
        initial="hidden"
        animate="show"
        key={active} // re-stagger when switching tabs
      >
        {visible.map(({ name, Icon }, i) => (
          <motion.div key={`${active}-${name}`} variants={item}>
            <SkillTile name={name} Icon={Icon} delayMs={50 * i} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
