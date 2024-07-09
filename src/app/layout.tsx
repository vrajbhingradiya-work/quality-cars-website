import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Footer, Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Quality Cars",
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
      <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/layout/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/layout/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/layout/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/layout/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/layout/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/layout/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='msapplication-config'
          content='/layout/favicon/browserconfig.xml'
        />
      </head>
      <body className={barlowCondensed.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
