"use client";

import { mainPage } from "@/config/pages";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Menu } from "../Menu";

export const Header = () => (
  <header className="p-8 flex flex-wrap flex-row justify-between gap-8 items-start text-white text-sm">
    <div className="logo">
      <Link href={mainPage.href}>
        <Image src={logo} alt="Odycust" />
      </Link>
    </div>
    <Menu />
  </header>
);
