import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.uhclang.org/"),
  title: "UnholyC",
  description: "C++ & HolyC unwanted child",
  openGraph: {
    title: "UnholyC",
    description: "C++ & HolyC unwanted child",
    images: [
      {
        url: "/uhc.png",
        width: 512,
        height: 512,
        alt: "UnholyC Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "UnholyC",
    description: "C++ & HolyC unwanted child",
    images: ["/uhc.png"],
  },
  other: {
    "theme-color": "#4d0218",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
