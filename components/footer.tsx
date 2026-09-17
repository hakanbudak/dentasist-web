import { footerNote, nav } from "@/lib/content";
import { Brand } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <Brand />
        <nav className="foot-links" aria-label="Alt menü">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#demo">Demo talep edin</a>
        </nav>
        <p className="foot-fine">{footerNote}</p>
      </div>
    </footer>
  );
}
