import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import dynamic from "next/dynamic";

const App = dynamic(
  () => {
    return import("../components/App");
  },
  { ssr: false }
);

const Home: NextPage = () => {
  useEffect(function () {}, []);
  return (
    <div>
      <Head>
        <title>Tech Stack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas id="myCanvas"></canvas>
      <App />
    </div>
  );
};

export default Home;
