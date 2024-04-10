const deckOfFire: FolderWithStacks = {
  type: "folder",
  name: "deck-of-fire",
  stacks: [
    {
      type: "project",
      name: "client",
      repo: "kabirseth4/deck-of-fire-client",
      url: "https://deck-of-fire.netlify.app",
    },
    {
      type: "project",
      name: "server",
      repo: "kabirseth4/deck-of-fire-server",
    },
  ],
};

const simsify: Project = {
  type: "project",
  name: "simsify",
  repo: "kabirseth4/Simsify",
};

const portfolio: Project = {
  type: "project",
  name: "portfolio",
  repo: "kabirseth4/portfolio",
};

export const projects: Stack = {
  type: "stack",
  name: "projects",
  items: [deckOfFire, simsify, portfolio],
};
