"use client";

import { SOCIAL_NETWORKS } from "@/shared/constants";
import { SocialNetWorkItem } from "../SocialNetWorkItem";

export const Footer = () => (
  <footer className="p-8 flex justify-end-safe">
    <div className="flex gap-4">
      {SOCIAL_NETWORKS.map((socialPage, idx) => (
        <SocialNetWorkItem key={idx} socialPage={socialPage} />
      ))}
    </div>
  </footer>
);
