import iconMax from "@/assets/icons/icon_max.svg";
import iconVK from "@/assets/icons/icon_vk.svg";
import iconTelegram from "@/assets/icons/icon_tg.svg";
import iconYoutube from "@/assets/icons/icon_youtube.svg";
import iconEmail from "@/assets/icons/icon_email.svg";
import { SocialNetworLink } from "./types";

export const SOCIAL_NETWORKS_DATA: Record<string, SocialNetworLink> = {
  vk: {
    icon: iconVK,
    alt: "odycust vk",
    href: "https://vk.com/odycust",
    color: "#3770b1",
  },
  max: {
    icon: iconMax,
    alt: "odycust max",
    href: "https://max.ru/join/sLpEjO5wUiob68wEuY7zsbkOTMsnu0POMxVnvYDOUpE",
    color: "#8f3fff",
  },
  telegram: {
    icon: iconTelegram,
    alt: "odycust telegram",
    href: "https://t.me/odycust",
    color: "#269bcc",
  },
  youtube: {
    icon: iconYoutube,
    alt: "odycust youtube",
    href: "https://www.youtube.com/@ODYCUST",
    color: "#d10017",
  },
  email: {
    icon: iconEmail,
    alt: "odycust email",
    href: "#",
  },
};

export const SOCIAL_NETWORKS = Object.values(SOCIAL_NETWORKS_DATA);
