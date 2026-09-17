"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Brand() {
  return (
    <a className="brand" href="#top">
      <span className="brand-mark" aria-hidden="true">
        Dt
      </span>
      {site.name}
    </a>
  );
}

/**
 * Banner hero'nun yeşili üzerinde şeffaf durur; sayfa kaydırılınca beyaza döner.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <div className="wrap nav-in">
        <Brand />
        <nav className="nav-links" aria-label="Bölümler">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="#demo">
          Demo talep edin
        </a>
      </div>
    </header>
  );
}
