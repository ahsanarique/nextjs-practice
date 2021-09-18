import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h1>Portfolio - Project Id === {projectId}</h1>
    </div>
  );
};

export default ProjectPage;
