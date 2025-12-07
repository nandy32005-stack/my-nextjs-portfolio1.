import "@/app/globals.css";

import { clsx } from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Dummy DATA to avoid errors
const DATA = {
  home: { hero: { name: "Portfolio", subtitle: "My Portfolio" } },
  footer: {
    name: "Portfolio",
    description: "My portfolio website",
    contact: { email: "email@example.com", phone: "1234567890", location: "Earth" },
    socialLinks: [],
    services: [],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: DATA.home.hero.name,
    template: `%s | ${DATA.home.hero.name}`,
  },
  description: DATA.home.hero.subtitle,
  openGraph: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    description: DATA.home.hero.subtitle,
    siteName: DATA.home.hero.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    card: "summary_large_image",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const content = (
    <main className="bg-background min-h-screen bg-gradient-to-b from-background to-content2">
      {/* Navigation placeholder */}
      <div className="p-4 font-bold text-xl">Navigation</div>
      <div className="p-4">{children}</div>
      {/* Footer placeholder */}
      <div className="p-4 font-bold text-center">Footer</div>
    </main>
  );

  return (
    <html suppressHydrationWarning lang="en">
      <body className={clsx("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        {content}
      </body>
    </html>
  );
}
