import Layout from "../components/layout";
import Title from "../components/title";
import styles from "./about.module.css";

const About = () => {
  return (
    <Layout>
      <main style={{ marginTop: "5rem" }}>
        <section>
          <div className={styles.bannerContainer}>
            <div
              className={styles.banner}
              style={{ backgroundImage: "url('/images/coffee_at_hand.jpg')" }}
            ></div>
            <div className="abs-center">
              <Title text="SEJARAH" size="xl" color="white" />
            </div>
          </div>

          <div className={styles.body + " dot-bg"}>
            <p class={styles.paragraph}>
              There is something magical about a warm cup of coffee. Enjoying it
              can be a complex ritual but also a simple feeling. We at Reykjavík
              Roasters try to recreate that feeling through every cup of coffee
              we offer you.
            </p>
            <p class={styles.paragraph}>
              The concept behind our company is a simple one: we want to import
              good beans, roast them with care and brew them to the best of our
              abilities for the enjoyment of ourselves and all people who
              appreciate great coffee.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.bannerContainer}>
            <div
              className={styles.banner}
              style={{ backgroundImage: "url('/images/coffee_plant.jpg')" }}
            ></div>
            <div className="abs-center">
              <Title text="KONSEP" size="xl" color="white" />
            </div>
          </div>

          <div className={styles.body + " dot-bg"}>
            <p class={styles.paragraph}>
              Jika kalian mulai bosan dengan kafe-kafe mainstream, kami
              menyediakan coffee shop bertema unik yang menyajikan banyak sekali
              spot foto instagramable. Tidak hanya cantik dan unik untuk stok
              foto kalian, Rumah Kopi Banjarnegara juga menawarkan banyak
              menu-menu menarik dengan harga yang ramah di kantong.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
