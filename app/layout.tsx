import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Görkem Ertaş | Software Engineer",
  description: "Yapay zekâ, backend mühendisliği ve full-stack ürün geliştirmeye odaklanan yazılım mühendisi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
