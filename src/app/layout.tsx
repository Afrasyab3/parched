import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parched Islamabad | 5-Star Lasagna & Dessert Cloud Kitchen in G-13",
  description: "Craving Islamabad's hypiest beef lasagna, gooey Nutella crepes, fudgy brownies, and legendary Three Leches cake? Portions that fill you up, prices that don't empty your wallet. Order now via Foodpanda or DM us!",
  openGraph: {
    title: "Parched Islamabad | 5-Star Lasagna & Dessert Cloud Kitchen",
    description: "Cheeky comfort food made in-house. 4.7★ rated on Foodpanda. Delivering to G-13, G-14, F-11 & surrounds.",
    siteName: "Parched Islamabad",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF5ED] text-[#262B17]">{children}</body>
    </html>
  );
}
