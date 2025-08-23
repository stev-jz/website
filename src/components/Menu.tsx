import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = { id: "about" | "experience" | "projects"; label: string };

export default function MenuList(){
    const items: Item[] = useMemo(
        () => [
        { id: "about", label: "ABOUT" },
        { id: "experience", label: "EXPERIENCE" },
        { id: "projects", label: "PROJECTS" },
        ],
        []
    );

    const [active, setActive] = useState<Item["id"]>("about");

useEffect(() => {
  const targets = ["about","experience","projects"]
    .map(id => document.getElementById(id))
    .filter(Boolean) as Element[];

  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      // prefer the entry whose center is most visible
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
      if (visible?.target?.id) setActive(visible.target.id as Item["id"]);
    },
    {
      // use viewport as root (no `root` passed)
      rootMargin: "-45% 0px -45% 0px", // “active” when the section crosses the middle band
      threshold: 0.01,
    }
  );

  targets.forEach(t => observer.observe(t));
  return () => observer.disconnect();
}, []);

    return(
    <nav className="hidden pl-[1vw] pt-[4.5vw] lg:flex flex-col gap-6" aria-label="Section menu">
      {items.map(({ id, label }) => {
        const isActive = active === id;

        return (
          <Link
            key={id}
            href={`#${id}`}
            aria-current={isActive ? "true" : undefined}
            className="cursor-pointer w-fit group flex items-center gap-[1.2vw]"
          >
            <span
              className={[
                // base line
                "inline-block lg:border-t-3 md:border-t-2 border-current/20 rounded-full transition-all duration-300",
                // base width
                "w-[3rem]",
                // hover state (kept from your version)
                "group-hover:w-[clamp(5rem,10cqw,8rem)] group-hover:border-current/70 dark:group-hover:border-white/90",
                // ACTIVE state
                isActive
                  ? "w-[clamp(5rem,10cqw,8rem)] border-current/70 dark:border-white/90"
                  : "",
              ].join(" ")}
            />
            <span
              className={[
                "text-[clamp(0.8vw,2.6cqw,0.85vw)] tracking-wider font-bold transition-colors duration-200",
                // default (inactive)
                "text-black/40 dark:text-white/20",
                // hover
                "group-hover:text-black/70 dark:group-hover:text-white/90",
                // ACTIVE
                isActive ? "text-black/70 dark:text-white/90" : "",
              ].join(" ")}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
    );
}