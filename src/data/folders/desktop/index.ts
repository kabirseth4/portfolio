import { projects } from "./projects";
import { collaborations } from "./collaborations";
import { hackathons } from "./hackathons";

export const desktop: FolderWithStacks = {
  type: "folder",
  name: "Desktop",
  stacks: [projects, collaborations, hackathons],
};
