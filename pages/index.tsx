import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { getAllProducts } from "../lib/catalog";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const products = await getAllProducts();
  return { props: { products } };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <Head>
      <title>Ronx</title>
      <meta name="description" content="Ronx" />
      <link rel="icon" href="/ronx.svg" />
    </Head>

    <header className="mt-8 flex justify-center">
      <Image src="/ronx.svg" alt="Ronx Logo" width={320} height={320} />
    </header>

    <main className="mt-8 mx-8">
      {products.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </main>
  </div>
);

export default Home;
