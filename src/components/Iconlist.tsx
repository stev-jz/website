interface IconConfig {
  href: string;
  label: string;
  isExternal?: boolean;
  paths: Array<{
    d: string;
    fillRule?: "evenodd" | "nonzero";
    clipRule?: "evenodd" | "nonzero";
    fill?: string;
  }>;
}

const iconConfigs: IconConfig[] = [
  {
    href: "https://github.com/stev-jz",
    label: "GitHub profile",
    isExternal: true,
    paths: [{
      d: "M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }]
  },
  {
    href: "https://www.linkedin.com/in/stevenzhang-uoft/",
    label: "LinkedIn profile",
    isExternal: true,
    paths: [
      {
        d: "M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      },
      {
        d: "M7.2 8.809H4V19.5h3.2V8.809Z"
      }
    ]
  },
  {
    href: "mailto:stevenj.zhang@mail.utoronto.ca",
    label: "Email contact",
    isExternal: false,
    paths: [
      {
        d: "M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"
      },
      {
        d: "M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"
      }
    ]
  },
  {
    href: "https://www.instagram.com/stevenzhan.g/",
    label: "Instagram profile",
    isExternal: true,
    paths: [{
      d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z",
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor"
    }]
  }
];

export default function Iconlist(){
    return(
        <nav 
          className="py-[20] lg:pt-[30vh] max-lg:mt-1 max-lg:px-4 container-type-inline flex gap-x-4 opacity-65 dark:opacity-55 max-lg:justify-center" 
          aria-label="Social links"
        >
            {iconConfigs.map((icon, index) => (
                <a 
                  key={index}
                  href={icon.href}
                  target={icon.isExternal ? "_blank" : undefined}
                  rel={icon.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={icon.label}
                >
                    <svg 
                      className="dark:hover:opacity-50 hover:opacity-60 lg:size-[clamp(1.9vw,6cqw,2.2vw)] max-lg:size-[6vw] text-black dark:text-white" 
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                        {icon.paths.map((path, pathIndex) => (
                            <path
                              key={pathIndex}
                              d={path.d}
                              fillRule={path.fillRule}
                              clipRule={path.clipRule}
                              fill={path.fill}
                            />
                        ))}
                    </svg>
                </a>
            ))}
        </nav>
    );
}