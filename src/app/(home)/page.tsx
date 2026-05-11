import { Metadata } from "next/types";
import Image from "next/image";

import photoPath from "@/assets/images/me.jpg";

export const metadata: Metadata = {
  title: "Главная | ODYCUST",
  description: "Делаю LO-FI, Boom-Bap. Люблю Roland SP404 и AKAI MPC",
};

export default function Home() {
  return (
    <section className="text-white">
      <div className="p-8 flex flex-col">
        <h1>ODYCUST - это я.</h1>
        <div className="flex flex-col justify-start gap-8 md:flex-row">
          <Image src={photoPath} alt="Odycust" width={480} height={640} />
          <div>
            <p className="mb-4">
              Всем привет! Меня зовут Владимир. ODYCUST - это мой способ общения
              с тобой через неспешный темп и инстументал LO-FI качества.
            </p>
            <p className="mb-4">
              В своих работах я предпочитаю по-максимуму избегать компьютер и
              делаю музыку на железках серии SP-404 и AKAI MPC, используя сэмплы
              с пыльного винила и затертых аудио-кассет
            </p>
            <p className="mb-4">
              Я не умею делать музыку: я учусь, спасибо что сопровождаешь меня
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
