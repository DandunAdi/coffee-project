import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BigMenu from "../components/bigMenu";
import Content from "../components/content";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <HomeHero />
        <BigMenuContainer />
        <Slider />
        <Content />
        <OpenHours />
      </main>
    </Layout>
  );
}

const HomeHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero + " flex"}></div>
      <div className={styles.heroLogo + " abs-center"}>
        <Image src="/images/rumahkopi.png" layout="fill" />
      </div>
      <div className={styles.heroSkipButton + " flex"}>
        <svg
          className="mk-svg-icon"
          data-name="mk-jupiter-icon-arrow-bottom"
          data-cacheid="icon-60b007279d24f"
          style={{ height: "16px", width: "16px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#fff"
            d="M512 121.6c0 8-3.2 16-8 22.4l-225.6 240c-6.4 6.4-14.4 9.6-24 9.6-8 0-16-3.2-22.4-9.6l-224-240c-11.2-12.8-11.2-33.6 1.6-44.8 12.8-12.8 32-11.2 44.8 1.6l201.6 214.4 203.2-216c11.2-12.8 32-12.8 44.8 0 4.8 6.4 8 14.4 8 22.4z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

const BigMenuContainer = () => {
  return (
    <section className={styles.bigMenuContainer}>
      <BigMenu
        imgSrc="/images/coffee_at_hand.jpg"
        title="ABOUT US"
        href="/about"
      />
      <BigMenu
        imgSrc="/images/brew_coffee.jpg"
        title="GALLERY"
        href="/gallery"
      />
      <BigMenu
        imgSrc="/images/coffee_shop.jpg"
        title="LOCATIONS"
        href="/locations"
      />
    </section>
  );
};

const Slider = () => {
  return (
    <section className="dot-bg" style={{ padding: "2rem 0" }}>
      <Title text="BEST SELLER" size="xxl" />
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage={50}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <Image
              src={`/images/label/${i}.png`}
              width="400px"
              height="400px"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

const OpenHours = () => {
  return (
    <section className="dot-bg" style={{ padding: "2rem 0" }}>
      <Title text="KOMPLEK RUKO ATRIUM SQUARE BANJARNEGARA" size="xl" />
      <div className="flex">
        <svg
          style={{ width: "4rem", color: "#979a9d" }}
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
        <h4 style={{ margin: "1rem 0 2rem" }}>Weekend: 09:00 - 23:00</h4>
      </div>
    </section>
  );
};
