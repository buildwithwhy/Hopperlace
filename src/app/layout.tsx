import type { Metadata } from "next";
import "./globals.css";

const title = "Hopperlace — AI tool comparison & values-based choice";

const description =
  "We're developing independent, hands-on comparisons of AI tools: testing them on the same tasks, checking their outputs, and recording the effort needed to get a usable result. ValueCompass, which you can use today, adds research on the companies behind those tools.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hopperlace.ai"),
  title,
  description,
  keywords: [
    "AI tool comparison",
    "compare AI tools",
    "independent AI testing",
    "values-based AI choice",
    "ValueCompass",
    "AI evaluation",
    "AI app builder comparison",
    "model selection",
    "deference-aware evaluation",
    "trustworthy AI",
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
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
