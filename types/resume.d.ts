type ExperienceProps = {
  head1: string | JSX.Element;
  head2?: string | JSX.Element;
  head3?: string | JSX.Element;
  head4?: string | JSX.Element;
  bulletPoints: (string | JSX.Element)[];
};

type EducationProps = {
  title: string;
  gpa: string;
  org: { name: string; logo: ImageProps["src"] };
  time: string;
};
