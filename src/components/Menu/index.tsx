"use client";

import { menuPages } from "@/config/pages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import React from "react";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathName = usePathname();

  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className="size-6"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {menuPages.map((menuItem, idx) => (
          <Link
            key={idx}
            href={menuItem.href}
            className={`${!!match(menuItem.href)(pathName) ? "underline" : null} p-4 transition hover:bg-white hover:text-black line-through md:text-lg`}
          >
            {menuItem.title}
          </Link>
        ))}
      </div>
      <div>
        <dialog open={isMenuOpen} className="backdrop:bg-transparent lg:hidden">
          <div tabIndex={0} className="fixed inset-0 focus:outline-none">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-16 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-12 py-6">
                    {menuPages.map((menuItem, idx) => (
                      <Link
                        key={idx}
                        href={menuItem.href}
                        className={`${!!match(menuItem.href)(pathName) ? "underline" : null} block transition hover:bg-white hover:text-black line-through text-lg text-white`}
                      >
                        {menuItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </nav>
  );
};
