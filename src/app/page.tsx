import Image from "next/image";
import plugImage from "../../public/in_process.png";

export default function Home() {
  return (
    <section className="w-full h-full bg-[url(../../public/in_process.png)] bg-no-repeat bg-center bg-cover">
      {/* <Image
        src={plugImage}
        alt="Сайт в разработке"
        className="absolute inset-0 -z-1"
      /> */}
    </section>
  );
}
