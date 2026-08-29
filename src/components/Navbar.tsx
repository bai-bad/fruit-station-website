"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, OrangeSlice, X } from "@phosphor-icons/react";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" }, { href: "/programs", label: "Programs" }, { href: "/events", label: "Events" },
  { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navbar site-container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Fruit Station home" onClick={() => setIsOpen(false)}>
          <span className="brand-icon"><OrangeSlice weight="fill" /></span>
          <span className="brand-copy"><strong>Fruit Station</strong><small>Badminton Club</small></span>
        </Link>
        <div className="desktop-nav">{navigation.map((item) => <Link className={pathname === item.href ? "nav-link-active" : undefined} href={item.href} key={item.href}>{item.label}</Link>)}</div>
        <Link className="nav-cta" href="/contact">Join Us <CaretDown weight="bold" /></Link>
        <div className="mobile-nav">
          <button className="mobile-menu-button" type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X weight="bold" /> : <List weight="bold" />}</button>
          {isOpen && <div className="mobile-nav-panel" id="mobile-navigation">{navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}<Link className="mobile-join" href="/contact" onClick={() => setIsOpen(false)}>Join Us</Link></div>}
        </div>
      </nav>
    </header>
  );
}
