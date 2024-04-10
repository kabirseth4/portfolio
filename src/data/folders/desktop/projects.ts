const deckOfFire: FolderWithStacks = {
  type: "folder",
  name: "deck-of-fire",
  stacks: [
    {
      type: "project",
      name: "client",
      repo: "deck-of-fire-client",
      url: "https://deck-of-fire.netlify.app",
    },
    {
      type: "project",
      name: "server",
      repo: "deck-of-fire-server",
    },
  ],
};

const simsify: Project = {
  type: "project",
  name: "simsify",
  repo: "Simisfy",
};

const portfolio: Project = {
  type: "project",
  name: "portfolio",
  repo: "portfolio",
};

export const projects: Stack = {
  type: "stack",
  name: "Projects",
  items: [deckOfFire, simsify, portfolio],
};
