import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fruit Station Badminton Club" }],
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
    <html lang="en" className={geist.variable}>
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
