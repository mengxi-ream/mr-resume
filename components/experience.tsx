export default function Experience({
  head1,
  head2,
  head3,
  head4,
  bulletPoints,
}: ExperienceProps) {
  return (
    <section>
      <div className="text-sm font-semibold hidden md:flex justify-between flex-wrap text-zinc-700 dark:text-zinc-300">
        <div className="flex gap-x-4 flex-wrap">
          <div className="font-bold text-black dark:text-white">{head1}</div>
          <div>{head2}</div>
          <div>{head3}</div>
        </div>
        <div>{head4}</div>
      </div>
      <div className="text-sm font-semibold md:hidden text-zinc-700 dark:text-zinc-300 mb-1">
        <div className="flex gap-x-4 flex-wrap justify-between">
          <div className="font-bold text-black dark:text-white">{head1}</div>
          <div>{head2}</div>
        </div>
        <div className="flex gap-x-4 flex-wrap justify-between">
          <div>{head3}</div>
          <div>{head4}</div>
        </div>
      </div>
      <ul className="text-sm list-disc ml-4 text-zinc-600 dark:text-zinc-400">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
