import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hopperlace.ai"),
  title: "Hopperlace — Human-adaptive AI. Trustworthy by design.",
  description:
    "Hopperlace builds the infrastructure AI systems need to know when to act, when to defer, and how to coordinate with humans on high-stakes decisions — across evidence synthesis, clinical decision support, legal reasoning, and the other domains where confident errors are most costly.",
  keywords: [
    "AI evaluation",
    "human-in-the-loop",
    "AI orchestration",
    "deference-aware evaluation",
    "AI safety",
    "AI trust",
    "systematic review",
    "evidence synthesis",
    "human-AI coordination",
    "AI infrastructure",
  ],
  authors: [{ name: "Hopperlace" }],
  creator: "Hopperlace",
  openGraph: {
    title: "Hopperlace — Human-adaptive AI. Trustworthy by design.",
    description:
      "Evaluation and orchestration infrastructure for AI systems that know when to act, when to defer, and how to hand off well.",
    url: "https://hopperlace.ai",
    siteName: "Hopperlace",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Hopperlace — Human-adaptive AI. Trustworthy by design.",
    description:
      "Evaluation and orchestration infrastructure for AI systems that know when to act, when to defer, and how to hand off well.",
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
