const studio: FolderWithStacks = {
  type: "folder",
  name: "studio",
  stacks: [
    {
      type: "project",
      name: "client",
      repo: "afyqzarof/studio-client",
      url: "https://ideation-studio.dev",
    },
    {
      type: "project",
      name: "server",
      repo: "afyqzarof/studio-server",
    },
  ],
};

export const collaborations: Stack = {
  type: "stack",
  name: "collaborations",
  items: [studio],
};
