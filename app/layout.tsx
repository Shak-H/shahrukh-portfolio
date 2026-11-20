import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Shahrukh Hughes | Frontend Software Engineer";
const siteDescription =
  "Frontend software engineer at iVendi, building web products that make complex tasks easier. Explore my work in vehicle finance, AI research and mobile ordering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shahrukhhughes.co.uk"),
  title: {
    default: siteTitle,
    template: "%s | Shahrukh Hughes",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://shahrukhhughes.co.uk",
    siteName: "Shahrukh Hughes",
    locale: "en_GB",
    type: "website",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <div className="max-w-4xl mx-auto px-6 py-10">{children}</div>
      </body>
    </html>
  );
}
