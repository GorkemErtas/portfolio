import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Görkem Ertaş | Software Engineer",
  description: "Software Engineer focused on AI/ML, backend engineering and full-stack product development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
