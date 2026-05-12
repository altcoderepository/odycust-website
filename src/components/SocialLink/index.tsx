import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  title: string;
  color?: string;
};

export const SocialLink: FC<Props> = ({ href, title, color }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`text-[${color || "white"}] text-lg hover:underline`}
    >
      {title}
    </Link>
  );
};
