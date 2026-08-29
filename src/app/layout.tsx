import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Fruit Station Badminton Club",
    template: "%s | Fruit Station Badminton Club",
  },
  description:
    "A welcoming Toronto badminton community to learn, practice, compete, and improve.",
  openGraph: {
    type: "website",
    title: "Fruit Station Badminton Club",
    description:
      "Toronto badminton community. Learn · Practice · Compete · Improve.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Cute Fruit Station badminton mascots" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fruit Station Badminton Club",
    description:
      "Toronto badminton community. Learn · Practice · Compete · Improve.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
