"use client";

import type { ReactNode } from "react";

export function SmoothLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 80; // fixed navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
