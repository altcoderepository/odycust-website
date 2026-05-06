import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import iconMax from "../../public/icon_max.svg";
import iconVK from "../../public/icon_vk.svg";
import iconTelegram from "../../public/icon_tg.svg";
import iconYoutube from "../../public/icon_youtube.svg";
import iconEmail from "../../public/icon_email.svg";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odycust",
  description: "Пишу музыку, живу музыкой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="root flex flex-col justify-start">
          <header className="p-8 flex flex-wrap justify-center-safe gap-16 items-center text-white text-lg">
            <div className="menu flex gap-12 uppercase h-max">
              <Link
                href=""
                className="p-4 transition hover:bg-white hover:text-black line-through"
              >
                Обо мне
              </Link>
              <Link
                href=""
                className="p-4 transition hover:bg-white hover:text-black line-through"
              >
                Релизы
              </Link>
            </div>
            <div className="logo">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Odycust"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 33vw"
                  layout="responsive"
                />
              </Link>
            </div>
            <div className="menu flex gap-12 uppercase h-max">
              <Link
                href=""
                className="p-4 transition hover:bg-white hover:text-black line-through"
              >
                Мерч
              </Link>
              <Link
                href=""
                className="p-4 transition hover:bg-white hover:text-black line-through"
              >
                Контакты
              </Link>
            </div>
          </header>
          <main className="overflow-hidden h-full">{children}</main>
          <footer className="absolute inset-x-0 bottom-0 p-8 flex justify-end-safe">
            <div className="flex gap-4">
              <a href="https://vk.com/odycust">
                <Image src={iconVK} alt="vk_link" />
              </a>
              <a href="https://max.ru/join/sLpEjO5wUiob68wEuY7zsbkOTMsnu0POMxVnvYDOUpE">
                <Image src={iconMax} alt="max_link" />
              </a>
              <a href="https://t.me/odycust">
                <Image src={iconTelegram} alt="tg_link" />
              </a>
              <a href="https://www.youtube.com/@ODYCUST">
                <Image src={iconYoutube} alt="youtube_link" />
              </a>
              <a href="#">
                <Image src={iconEmail} alt="email_link" />
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
