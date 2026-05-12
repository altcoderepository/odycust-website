import { SOCIAL_NETWORKS_DATA } from "@/shared/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты | ODYCUST",
  description: "Ссылки на социальные сети, стриминги Odycust",
};

export default function Contacts() {
  return (
    <section className="text-white">
      <div className="p-8">
        <h1>Официальные страницы</h1>
        <h2>Социальные сети:</h2>
        <p className="mb-16 break-normal leading-16">
          <Link
            href={SOCIAL_NETWORKS_DATA.vk.href}
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#3770b1] hover:bg-[#3770b1] hover:text-white md:text-xl"
          >
            VK
          </Link>
          <Link
            href={SOCIAL_NETWORKS_DATA.max.href}
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#8f3fff] hover:bg-[#8f3fff] hover:text-white md:text-xl"
          >
            МАКС
          </Link>
          <Link
            href={SOCIAL_NETWORKS_DATA.telegram.href}
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#269bcc] hover:bg-[#269bcc] hover:text-white md:text-xl"
          >
            telegram
          </Link>
        </p>
        <h2>Стриминги:</h2>
        <p className="mb-16 break-normal leading-16">
          <Link
            href="https://music.yandex.ru/artist/23537356"
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#ffee04] hover:bg-[#ffee04] hover:text-black md:text-xl"
          >
            Яндекс Музыка
          </Link>
          <Link
            href="https://vk.com/artist/7311951652756053296"
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#3770b1] hover:bg-[#3770b1] hover:text-white md:text-xl"
          >
            VK Музыка
          </Link>
          <Link
            href="https://zvuk.com/artist/213162472"
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#04cf74] hover:bg-[#04cf74] hover:text-black md:text-xl"
          >
            ЗВУК
          </Link>
          <Link
            href="https://music.mts.ru/artist/23537356"
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#611092] hover:bg-[#611092] hover:text-white md:text-xl"
          >
            MTS Music
          </Link>
          <Link
            href="https://music.apple.com/us/artist/odycust/1787907040?"
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#d10017] hover:bg-[#d10017] hover:text-white md:text-xl"
          >
            Apple Music
          </Link>
          <Link
            href="https://open.spotify.com/artist/77EkNUfZC6U2mJYkkJv5Tc"
            target="_blank"
            className="transition p-2 text-2xl font-black text-[#1bd15d] hover:bg-[#1bd15d] hover:text-black md:text-xl"
          >
            Spotify
          </Link>
        </p>
        <h2>Контакты:</h2>
        <p className="mb-2">email: odycu5t@yandex.ru</p>
        <p className="mb-4">телефон: +7 (999) 999-99-99</p>
      </div>
    </section>
  );
}
