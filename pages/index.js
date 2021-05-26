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
            <svg
              style={{ width: "4rem" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="clock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
              ></path>
            </svg>
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
