import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChatCircleDots,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Fruit Station Badminton Club in Toronto.",
};

export default function ContactPage() {
  return (
    <main className="placeholder-page contact-page">
      <section className="contact-shell site-container" aria-labelledby="contact-title">
        <header className="contact-heading">
          <p className="section-eyebrow">Get in touch</p>
          <h1 id="contact-title">Contact Fruit Station</h1>
        </header>

        <div className="contact-grid">
          <a
            className="contact-card contact-email"
            href="mailto:fruitbadminton@gmail.com"
            aria-label="Email Fruit Station at fruitbadminton@gmail.com"
          >
            <span className="contact-icon"><EnvelopeSimple weight="fill" /></span>
            <span className="contact-card-copy"><small>Email</small><strong>fruitbadminton@gmail.com</strong></span>
            <ArrowUpRight className="contact-arrow" weight="bold" aria-hidden="true" />
          </a>

          <a
            className="contact-card contact-phone"
            href="tel:+16479966919"
            aria-label="Call Fruit Station at 647-996-6919"
          >
            <span className="contact-icon"><Phone weight="fill" /></span>
            <span className="contact-card-copy"><small>Phone</small><strong>647-996-6919</strong></span>
            <ArrowUpRight className="contact-arrow" weight="bold" aria-hidden="true" />
          </a>

          <div className="contact-card contact-red">
            <span className="contact-icon"><ChatCircleDots weight="fill" /></span>
            <span className="contact-card-copy"><small>Xiaohongshu / RED</small><strong lang="zh">多伦多菠萝</strong></span>
          </div>
        </div>
      </section>
    </main>
  );
}
