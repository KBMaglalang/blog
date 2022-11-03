import Head from "next/head";
import "../styles/globals.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Head>
        <title>Blog - NovelAI Notes</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
