import "./globals.css";

export const metadata = {
  title: "Shahrukh Hughes | Frontend Engineer",
  description: "Frontend Engineer portfolio",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
