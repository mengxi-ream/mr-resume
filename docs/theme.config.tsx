import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex gap-x-3 items-center">
      <Image src="/banner-rounded.png" alt="" height={20} width={48} />
      <span className="font-bold">Resume</span>
    </div>
  ),
  project: {
    link: "https://github.com/Crayon-ShinChan/mr-resume",
  },
  chat: {
    link: "https://discord.gg/A7pBTZjFjF",
  },
  docsRepositoryBase:
    "https://github.com/Crayon-ShinChan/mr-resume-docs/tree/main",
  footer: {
    text: "M.R. Resume Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – M.R. Resume",
    };
  },
  head: (
    <>
      <meta
        property="og:description"
        content="A framework to create new generation resume with power of React and Markdown."
      />
      <link rel="icon" href="./favicon.ico" />
    </>
  ),
  banner: {
    key: "1.0 development",
    text: (
      <a href="https://mr-resume.com/roadmap" target="_blank">
        🧑‍💻 M.R. Resume v1.0 is in development. Check our roadmap →
      </a>
    ),
  },
};

export default config;
