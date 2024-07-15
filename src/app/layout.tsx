import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Footer, Navbar } from "./components";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Quality Cars : Best Used Luxury Cars Dealer in Rajasthan",
  description: "Best place to buy luxury Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={barlowCondensed.className}>
        <StoreProvider>
          <Navbar />
          <Link
            className="hover:scale-110 transition duration-300 hover:ease-in-out fixed z-40 bottom-4 right-4 p-4 fill-white bg-green-500 rounded-full  shadow-md shadow-green-400"
            href="https://wa.me/9829407612"
          >
            <WhatsappIcon className="h-[35px] w-[35px] " />
          </Link>
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
