import Link from "next/link";
import { OrangeSlice } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div className="footer-main">
          <Link className="footer-brand" href="/"><OrangeSlice weight="fill" /> Fruit Station</Link>
          <div className="footer-links" aria-label="Footer navigation"><Link href="/programs">Programs</Link><Link href="/events">Events</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Fruit Station Badminton Club</span><span>Made with sunshine in Toronto</span></div>
      </div>
    </footer>
  );
}
