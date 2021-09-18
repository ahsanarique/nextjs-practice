import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  const { clientId } = router.query;

  return (
    <div>
      <h1>Client Id === {clientId}</h1>
    </div>
  );
};

export default ClientPage;
