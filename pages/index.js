import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </Layout>
  );
}
