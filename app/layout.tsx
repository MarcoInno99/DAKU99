import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { LeagueAccessGate } from "./components/LeagueAccessGate";
import { leagueAccessCookie, leagueAccessToken } from "./lib/league-access";
import "./globals.css";
import "./iconography.css";

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
    icon: "/bdc-league-crest.png",
    shortcut: "/bdc-league-crest.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const expectedToken = leagueAccessToken();
  const hasAccess = Boolean(expectedToken && cookieStore.get(leagueAccessCookie)?.value === expectedToken);
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {hasAccess ? children : <LeagueAccessGate/>}
      </body>
    </html>
  );
}
