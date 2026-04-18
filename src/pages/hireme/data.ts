interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading development of cutting-edge web applications using modern technologies.",
  },
  {
    title: "Mid-Level Software Engineer",
    company: "APOLLO 21 Co., Ltd",
    period: "2021 - 2022 (1 year 2 months)",
    description: `Apollo21 is an IT consulting and solution provider specializing in modern digital platforms, web applications, and mobile applications. The company delivers tailored technology solutions for both private and government organizations.`,
  },
  {
    title: "Junior Software Engineer",
    company: "LITIC CO., Ltd",
    period: "2017 - 2020 (3 years 2 months)",
    description: `Litic builds a cloud-based analytics platform that enables users to create, manage, and deploy decision models and analytical applications.`,
  },
];

export { experiences };
