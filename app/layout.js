import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500", "600", "700"]
});

export const metadata = {
  title: "Portfolio - Dyn-Seiler",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
