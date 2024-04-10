interface Item {
  type: string;
  name: string;
}

interface Stack extends Item {
  type: "stack";
  items: Items;
}

interface FolderBase extends Item {
  type: "folder";
}

interface FolderWithItems extends FolderBase {
  items: Items;
  stacks?: never;
}

interface FolderWithStacks extends FolderBase {
  stacks: Stacks;
  items?: never;
}

interface Project extends Item {
  type: "project";
  repo: string;
  url?: string;
}

type Folder = FolderWithItems | FolderWithStacks | Project;
type Items = (Folder | Project)[];
type Folders = Folder[];
type Stacks = Stack[] | Project[];
