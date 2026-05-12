import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  title: string;
  color?: string;
  invertByHover?: boolean;
};

export const SocialLink: FC<Props> = ({
  href,
  title,
  color,
  invertByHover,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`transition p-2 text-2xl font-black text-[${color}] hover:bg-[${color}] hover:text-${invertByHover ? "black" : "white"} md:text-xl`}
    >
      {title}
    </Link>
  );
};
