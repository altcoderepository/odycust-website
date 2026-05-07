import { PageLink } from "@/shared/types";

export const PAGES: Record<string, PageLink> = {
  home: {
    title: "Главная",
    href: "/",
  },
  info: {
    title: "Инфа",
    href: "/about",
  },
  releases: {
    title: "Релизы",
    href: "/releases",
  },
  merch: {
    title: "Мерч",
    href: "/merch",
  },
  contacts: {
    title: "Контакты",
    href: "/contacts",
  },
};

export const MENU_ITEMS: PageLink[] = Object.values(PAGES);

export const [mainPage, ...menuPages] = MENU_ITEMS;
