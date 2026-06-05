import type { Metadata } from "next";
import "./globals.css";

const description =
  "Trustworthy AI for high-stakes evidence review. Built on deference-aware evaluation, for systematic review teams and pharmacovigilance / drug-safety teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hopperlace.ai"),
  title: "Hopperlace — Trustworthy AI for high-stakes evidence review.",
  description,
  keywords: [
    "trustworthy AI",
    "evidence review",
    "systematic review",
    "pharmacovigilance",
    "drug safety",
    "literature monitoring",
    "deference-aware evaluation",
    "human-in-the-loop AI",
    "AI evaluation",
    "AI trust",
  ],
  authors: [{ name: "Hopperlace" }],
  creator: "Hopperlace",
  openGraph: {
    title: "Hopperlace — Trustworthy AI for high-stakes evidence review.",
    description,
    url: "https://hopperlace.ai",
    siteName: "Hopperlace",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Hopperlace — Trustworthy AI for high-stakes evidence review.",
    description,
  },
  alternates: {
    canonical: "https://hopperlace.ai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
