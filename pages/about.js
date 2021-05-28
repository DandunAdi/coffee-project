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
            <p className={styles.paragraph}>
              Rumah Kopi Banjarnegara adalah salah satu coffee shop terbaik di
              Banjarnegara yang didirikan pada tahun 2012. Terletak di Komplek
              Ruko Atrium Square Banjarnegara, kedai kami menjual biji kopi
              robusta dan arabika dengan kualitas terbaik.
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
            <p className={styles.paragraph}>
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
