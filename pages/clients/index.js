import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    {
      id: 1,
      name: "client 1",
    },
    {
      id: 2,
      name: "client 2",
    },
    {
      id: 3,
      name: "client 3",
    },
  ];

  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
