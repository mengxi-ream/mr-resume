import { type Icon } from "@/components/icons";
import Image, { type ImageProps } from "next/image";
import React from "react";

type Props = {
  icon?: Icon;
  image?: ImageProps["src"];
  content: string;
};

export default function LabelWithGraphic({
  icon: Icon,
  image,
  content,
}: Props) {
  return (
    <div className="flex items-center gap-1.5">
      {Icon && <Icon size={12} />}
      {image && (
        <Image
          src={image}
          alt=""
          height={24}
          width={24}
          className="h-4 w-4 rounded-full"
          unoptimized
        />
      )}
      {content}
    </div>
  );
}
