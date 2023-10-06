import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import React from "react";
import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";

export function Header() {
  return (
    <Container className="mt-5 mb-10">
      <nav className="relative flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/images/portrait.jpeg"
              alt="Portrait"
              width={48}
              height={48}
              className="w-10 h-10 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-400/40"
            />
          </Link>
        </div>
        <div className="pointer-events-auto">
          <ThemeSwitcher />
        </div>
      </nav>
    </Container>
  );
}
