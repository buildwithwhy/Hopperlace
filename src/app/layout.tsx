import type { Metadata } from "next";
import "./globals.css";

const title = "Hopperlace — AI stack evaluation & curation";

const description =
  "Hopperlace helps organisations choose and run the right AI stack — AI models and tools evaluated against your actual tasks, your risk profile, and how well your team can use them. Plus AI architecture support and independent benchmarks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hopperlace.ai"),
  title,
  description,
  keywords: [
    "AI stack evaluation",
    "AI tool curation",
    "AI architecture support",
    "independent AI benchmarks",
    "AI evaluation",
    "AI procurement",
    "model selection",
    "deference-aware evaluation",
    "trustworthy AI",
    "AI strategy consulting",
  ],
  authors: [{ name: "Hopperlace" }],
  creator: "Hopperlace",
  openGraph: {
    title,
    description,
    url: "https://hopperlace.ai",
    siteName: "Hopperlace",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
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
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
