interface Item {
  type: string;
  name: string;
}

interface CodeItem extends Item {
  type: "code";
  repo: string;
}

interface RepoItem extends Item {
  type: "repo";
  repo: string;
}

interface LiveItem extends Item {
  type: "live";
  link: string;
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

type Folder = FolderWithItems | FolderWithStacks;
type Items = (CodeItem | RepoItem | LiveItem | Folder)[];
type Folders = Folder[];
type Stacks = Stack[];
