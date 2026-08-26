"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar site-container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Fruit Station home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">FS</span>
          <span className="brand-type">
            <strong>FRUIT STATION</strong>
            <span>BADMINTON CLUB</span>
          </span>
        </Link>

        <div className="desktop-nav">
          <div className="nav-links">
            {navigation.map((item) => (
              <Link className={pathname === item.href ? "nav-link-active" : undefined} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="button button-primary nav-cta" href="/contact">
            Join Us <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mobile-nav">
          <button
            className={isOpen ? "mobile-menu-button is-open" : "mobile-menu-button"}
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          {isOpen && (
            <div className="mobile-nav-panel" id="mobile-navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link className="button button-primary" href="/contact" onClick={() => setIsOpen(false)}>
                Join Us <span aria-hidden="true">↗</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
