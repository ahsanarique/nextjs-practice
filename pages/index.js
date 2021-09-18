import fs from "fs/promises";
import path from "path";

import Head from "next/head";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <div>
      <Head>
        <title>Next.js Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home - index.js</h1>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
        </ul>

        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

// getStaticProps: Prepares the props for the HomePage function. Gets executed first. Then the HomePage component gets executed.

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "fakeData", "fakeData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 60, // ISR
  };
}

export default HomePage;
