import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  const { clientId, clientProjectId } = router.query;

  return (
    <div>
      <h1>Client Id: {clientId}</h1>
      <h1>Client Project Id === {clientProjectId}</h1>
    </div>
  );
};

export default ClientProjectPage;
