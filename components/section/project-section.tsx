import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { type ImageProps } from "next/image";
import { headers } from "next/headers";

type ProjectTitleProps = {
  image: ImageProps["src"];
  title: string;
  link: string;
};

async function getStarNumber(owner: string, repo: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const queryParams = new URLSearchParams({ owner, repo }).toString();
  const res = await fetch(
    `${protocol}://${host}/api/github/star?${queryParams}`,
    {
      cache: "no-cache",
    }
  );
  const { starNumber } = await res.json();
  return starNumber;
}

function ProjectTitle({ image, title, link }: ProjectTitleProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <LabelWithGraphic image={image} content={title} />
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
    </Link>
  );
}

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ProjectTitle
          image="/images/logos/nextjs.png"
          title="Next.js"
          link="https://nextjs.org/"
        />
      ),
      head2: (
        <LabelWithGraphic icon={Icons.Stack} content="TypeScript, React, SSG" />
      ),
      head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            "vercel",
            "next.js"
          )}`}
        />
      ),
      head4: "Sep 2023 - Pres.",
      bulletPoints: [
        "Id ex et adipisicing proident excepteur.",
        "Dolore ex commodo non et qui. Reprehenderit exercitation irure culpa sint nisi eiusmod amet ad occaecat quis.",
        "Veniam esse enim adipisicing incididunt tempor minim irure occaecat cupidatat duis consectetur dolor.",
        "Qui cupidatat adipisicing adipisicing aliqua irure id esse aute pariatur laborum non.",
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/tailwind.webp"
          title="Tailwind CSS"
          link="https://tailwindcss.com/"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="HTML, CSS" />,
      head3: <LabelWithGraphic icon={Icons.Star} content={`# Users: 412343`} />,
      head4: "Sep 2023 - Pres.",
      bulletPoints: [
        "Supported user to create their resume with React, and easily export it as pdf (like this resume)",
        "Enhanced resume with React, featuring responsive/interactive design, dark mode, showing real-time API data, and even integrating GPT etc.",
      ],
    },
  ];

  return (
    <Section title="PROJECT">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
