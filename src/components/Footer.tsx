import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main site-container">
        <div>
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark" aria-hidden="true">FS</span>
            <span className="brand-type">
              <strong>FRUIT STATION</strong>
              <span>BADMINTON CLUB</span>
            </span>
          </Link>
          <p className="footer-note">Learn together. Play often. Grow your game.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/programs">Programs</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom site-container">
        <span>© 2026 Fruit Station Badminton Club</span>
        <span>Toronto, Ontario</span>
      </div>
    </footer>
  );
}
