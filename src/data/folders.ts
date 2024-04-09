const deckOfFire: FolderWithStacks = {
  type: "folder",
  name: "deck-of-fire",
  stacks: [
    {
      type: "stack",
      name: "Client",
      items: [
        {
          type: "code",
          name: "dof-client-code",
          repo: "deck-of-fire-client",
        },
        {
          type: "repo",
          name: "dof-client-repo",
          repo: "deck-of-fire-client",
        },
        {
          type: "live",
          name: "Deck of Fire",
          link: "https://deck-of-fire.netlify.app",
        },
      ],
    },
    {
      type: "stack",
      name: "Server",
      items: [
        {
          type: "code",
          name: "dof-server-code",
          repo: "deck-of-fire-server",
        },
        {
          type: "repo",
          name: "dof-server-repo",
          repo: "deck-of-fire-server",
        },
      ],
    },
  ],
};

const simsify: FolderWithItems = {
  type: "folder",
  name: "simsify",
  items: [
    {
      type: "code",
      name: "simsify-code",
      repo: "Simsify",
    },
    {
      type: "repo",
      name: "simsify-repo",
      repo: "Simsify",
    },
  ],
};

const projects: Stack = {
  type: "stack",
  name: "Projects",
  items: [deckOfFire, simsify],
};

const desktop: FolderWithStacks = {
  type: "folder",
  name: "Desktop",
  stacks: [projects],
};

export const folders: Folders = [desktop];
