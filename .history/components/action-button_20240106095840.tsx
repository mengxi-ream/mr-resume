"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { usePrint } from "@/components/print-provider";

type Props = {
  text: string;
  className?: string;
  usage: "live" | "pdf";
};

export default function ActionButton({ text, className, usage }: Props) {
  const { handlePrint } = usePrint();
  return usage === "live" ? (
    <Button onClick={handlePrint} className={className}>
      {text}
    </Button>
  ) : (
    <Button href="/resume">
      {text}
      <Icons.OpenLink className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
    </Button>
  );
}
