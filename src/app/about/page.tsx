import { Metadata } from "next/types";
import Image from "next/image";

import photoPath from "@/assets/images/me.jpg";

export const metadata: Metadata = {
  title: "Инфа | ODYCUST",
  description: "Пишу музыку, живу музыкой",
};

export default function About() {
  return (
    <section className="text-white">
      <div className="p-8 flex flex-col">
        <h1>Инфа</h1>
        <div className="flex flex-col justify-start gap-8 md:flex-row">
          Что-нибудь накатаю потом))
        </div>
      </div>
    </section>
  );
}
