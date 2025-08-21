type Props = {
   href: string;
   classes?: string;
   children: React.ReactNode;
}

export default function TechUsed({ href, classes, children }: Props) {
   const defaultClasses = "font-[500] text-black/60 dark:text-white/60 hover:text-blue-600/80 transition-colors duration-200";
   
   return (
       <a 
           href={href}
           target="_blank" 
           rel="noopener noreferrer"
           className={classes || defaultClasses}
       >
           {children}
       </a>
   );
}