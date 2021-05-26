import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BigMenu from "../components/bigMenu";
import Slider from "../components/slider";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <div className={styles.heroContainer}>
          <div className={styles.hero + " flex"}></div>
          <div className="abs-center">
            <Image src="/images/rumahkopi.png" width="200" height="200" />
          </div>
        </div>
        <div className="bigMenu">
          <BigMenu imgSrc="/images/coffee_at_hand.jpg" title="ABOUT US" />
          <BigMenu imgSrc="/images/brew_coffee.jpg" title="GALLERY" />
          <BigMenu imgSrc="/images/coffee_shop.jpg" title="LOCATIONS" />
        </div>
        <Slider />
      </main>
    </Layout>
  );
}
