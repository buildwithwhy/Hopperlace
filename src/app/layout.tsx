import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hopperlace — Human-adaptive AI. Trustworthy by design.",
  description:
    "Hopperlace builds evaluation and orchestration infrastructure for AI systems that know when to act and when to defer.",
  openGraph: {
    title: "Hopperlace — Human-adaptive AI. Trustworthy by design.",
    description:
      "Evaluation and orchestration infrastructure for trustworthy AI systems.",
    url: "https://hopperlace.ai",
    siteName: "Hopperlace",
    type: "website",
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
