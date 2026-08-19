import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baia-domitia-championship.daku99.chatgpt.site"),
  title: "Baia Domitia Championship | Manager League",
  description: "Il portale manageriale della Baia Domitia Championship: rose, bilanci, stipendi, riconferme e strutture.",
  openGraph: {
    title: "Baia Domitia Championship",
    description: "Il fantacalcio diventa manageriale.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baia Domitia Championship",
    description: "Manager League · Mantra",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
