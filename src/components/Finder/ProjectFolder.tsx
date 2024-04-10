import vscodeIcon from "../../assets/images/vscode.png";
import githubIcon from "../../assets/icons/github.svg";
import chromeIcon from "../../assets/icons/chrome.svg";

interface ProjectFolderProps {
  project: Project;
}

export const ProjectFolder = ({ project }: ProjectFolderProps) => {
  return (
    <div className="flex gap-6 p-4 text-[#ddddde]">
      <div className="flex w-20 flex-col items-center gap-2">
        <img
          src={vscodeIcon}
          alt="Visual studio code"
          className="h-14 w-14 rounded"
        />
        <p>code</p>
      </div>
      <a
        className="flex w-20 flex-col items-center gap-1"
        href={`https://github.com/${project.repo}`}
        target="_blank"
      >
        <img src={githubIcon} alt="Github" className="h-14 w-14 rounded" />
        <p>repo</p>
      </a>
      {project.url && (
        <a
          className="flex w-20 flex-col items-center gap-1"
          href={project.url}
          target="_blank"
        >
          <img src={chromeIcon} alt="Google chrome" className="h-14 w-14" />

          <p>live</p>
        </a>
      )}
    </div>
  );
};
