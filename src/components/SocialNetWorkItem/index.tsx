import { SocialNetworLink } from "@/shared/types";
import { FC } from "react";

import Image from "next/image";

type Props = {
  socialPage: SocialNetworLink;
};
export const SocialNetWorkItem: FC<Props> = ({ socialPage }) => (
  <a target="_blank" href={socialPage.href}>
    <Image src={socialPage.icon} alt={socialPage.alt} />
  </a>
);
