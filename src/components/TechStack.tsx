
import Image from "next/image";

type TechItem = {
  name: string;
  icon: string; // Path to imported icon
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "F#", icon: "/icons/fsharp.svg" },
    ],
  },
  {
    title: "Technologies",
    items: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
    ],
  },
  {
    title: "Libraries",
    items: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
  },
  {
    title: "Other Tools",
    items: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {techCategories.map((category) => (
        <div
          key={category.title}
          className="
            rounded-[15]
            border-t dark:border-t-white/20 border-t-white/40
            dark:bg-white/4 bg-gray-400/10
            backdrop-blur-md
            shadow-[0_10px_20px_rgba(0,0,0,0.25)]
            dark:hover:bg-white/8 hover:bg-white/15
            dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
            hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
            dark:hover:backdrop-blur-md hover:backdrop-blur-lg
            hover:border-t-white-45 dark:hover:border-t-white/35
            p-6 transition duration-300 ease-in-out
          "
        >
          <h3 className="text-lg font-semibold mb-4 opacity-90">{category.title}</h3>
          <div className="flex flex-wrap gap-4">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={28}
                  height={28}
                  className="rounded-sm"
                />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
