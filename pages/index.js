import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BigMenu from "../components/bigMenu";
import Slider from "../components/slider";
import Content from "../components/content";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section className={styles.heroContainer}>
          <div className={styles.hero + " flex"}></div>
          <div className="abs-center">
            <Image src="/images/rumahkopi.png" width="200" height="200" />
          </div>
        </section>
        <section>
          <BigMenu imgSrc="/images/coffee_at_hand.jpg" title="ABOUT US" />
          <BigMenu imgSrc="/images/brew_coffee.jpg" title="GALLERY" />
          <BigMenu imgSrc="/images/coffee_shop.jpg" title="LOCATIONS" />
        </section>
        <Slider />
        <Content />
        <section className="dot-bg" style={{ padding: "2rem 0" }}>
          <Title text="KOMPLEK RUKO ATRIUM SQUARE BANJARNEGARA" size="xl" />
          <div className="flex">
            <i className="fa fa-clock" style={{ fontSize: "4rem" }}></i>
          </div>
          <div className="lg text-center" style={{ marginTop: "2rem" }}>
            <h4>Weekdays: 14:00 - 23:00</h4>
            <h4 style={{ marginTop: "1rem" }}>Weekend: 14:00 - 23:00</h4>
          </div>
        </section>
      </main>
    </Layout>
  );
}
