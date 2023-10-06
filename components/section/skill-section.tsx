import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Programming</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          JavaScript, Go, Python, C++, Java, Swift
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Others</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Machine/Deep Learning, PostgreSQL, MongoDB, A/B Testing
        </div>
      </div>
    </Section>
  );
}
