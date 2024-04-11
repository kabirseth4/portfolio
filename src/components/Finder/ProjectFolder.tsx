import vscodeIcon from "../../assets/images/vscode.png";
import githubIcon from "../../assets/icons/github.svg";
import chromeIcon from "../../assets/icons/chrome.svg";
import { FinderItem } from "./FinderItem";

interface ProjectFolderProps {
  project: Project;
  changeCode: (repo: string) => () => void;
}

export const ProjectFolder = ({ project, changeCode }: ProjectFolderProps) => {
  return (
    <div className="flex gap-6 p-4">
      <div onClick={changeCode(project.repo)}>
        <FinderItem icon={vscodeIcon} alt="Visual studio code" label="code" />
      </div>
      <a href={`https://github.com/${project.repo}`} target="_blank">
        <FinderItem icon={githubIcon} alt="Github" label="repo" />
      </a>
      {project.url && (
        <a href={project.url} target="_blank">
          <FinderItem icon={chromeIcon} alt="Google chrome" label="live" />
        </a>
      )}
    </div>
  );
};
