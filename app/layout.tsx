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
    <html lang="en">
      <body className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-10">{children}</div>
      </body>
    </html>
  );
}
