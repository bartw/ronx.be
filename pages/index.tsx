import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ronx</title>
        <meta name="description" content="Ronx" />
        <link rel="icon" href="/ronx.svg" />
      </Head>

      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="/ronx.svg" alt="Ronx Logo" width={320} height={320} />
      </main>
    </div>
  );
};

export default Home;
