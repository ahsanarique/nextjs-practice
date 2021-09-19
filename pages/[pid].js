import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  // Quicker fallback approach but not necessary fully loads everything before showing

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "fakeData", "fakeData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true, // or a string instead of boolean. Slower approach but loads fully finished page.
  };
}

export default ProductDetailPage;
