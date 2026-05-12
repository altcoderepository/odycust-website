import { SocialLink } from "@/components";
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
          <SocialLink
            href={SOCIAL_NETWORKS_DATA.vk.href}
            title="VK"
            color={SOCIAL_NETWORKS_DATA.vk.color}
          />
          <SocialLink
            href={SOCIAL_NETWORKS_DATA.max.href}
            title="МАКС"
            color={SOCIAL_NETWORKS_DATA.max.color}
          />
          <SocialLink
            href={SOCIAL_NETWORKS_DATA.telegram.href}
            title="telegram"
            color={SOCIAL_NETWORKS_DATA.telegram.color}
          />
          <SocialLink
            href={SOCIAL_NETWORKS_DATA.youtube.href}
            title="YouTube"
            color={SOCIAL_NETWORKS_DATA.youtube.color}
          />
        </p>
        <h2>Стриминги:</h2>
        <p className="mb-16 break-normal leading-16">
          <SocialLink
            invertByHover
            href="https://music.yandex.ru/artist/23537356"
            title="Яндекс Музыка"
            color="#ffee04"
          />
          <SocialLink
            href="https://vk.com/artist/7311951652756053296"
            title="VK Музыка"
            color={SOCIAL_NETWORKS_DATA.vk.color}
          />
          <SocialLink
            invertByHover
            href="https://zvuk.com/artist/213162472"
            title="ЗВУК"
            color="#04cf74"
          />
          <SocialLink
            href="https://music.mts.ru/artist/23537356"
            title="MTS Music"
            color="#611092"
          />
          <SocialLink
            href="https://music.apple.com/us/artist/odycust/1787907040?"
            title="Apple Music"
            color="#d10017"
          />
          <SocialLink
            invertByHover
            href="https://open.spotify.com/artist/77EkNUfZC6U2mJYkkJv5Tc"
            title="Spotify"
            color="#1bd15d"
          />
        </p>
        <h2>Контакты:</h2>
        <p className="mb-2">email: odycu5t@yandex.ru</p>
        <p className="mb-4">телефон: +7 (999) 999-99-99</p>
      </div>
    </section>
  );
}
