"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="mt-4 md:mt-10 flex justify-between gap-5">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/icons/library.png" alt="logo" width={40} height={40} />
        <span> Libracore</span>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href={"/library"}
            className={cn(
              "text-base cursor-pointer capitalize",
              pathName === "/library" ? "" : ""
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
