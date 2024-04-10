const officeHangman: Project = {
  type: "project",
  name: "office-hangman",
  repo: "kabirseth4/bstn-hackathon-1",
  url: "https://kabirseth4.github.io/bstn-hackathon-1/",
};

const deliveroo: Project = {
  type: "project",
  name: "deliveroo-industry-project",
  repo: "kabirseth4/deliveroo-tastemakers",
};

export const hackathons: Stack = {
  type: "stack",
  name: "hackathons",
  items: [officeHangman, deliveroo],
};
