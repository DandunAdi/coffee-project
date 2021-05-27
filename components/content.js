import styles from "./content.module.css";
import Image from "next/image";

const Content = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentBg}>
          <Image src="/images/coffee_art.png" width="271" height="503" />
        </div>
        <h3 className="xl">KOPI INDONESIA DAN KOPI LOKAL BANJARNEGARA</h3>
        <p className={styles.contentBody}>
          Kami menyediakan kopi asli Indonesia mulai dari Kerinci, Bali
          Kintamani, Gayo, Temanggung, Toraja Kalosi s.d Padang Solok. Tersedia
          dalam bentuk green bean, roasted bean, dan bubuk. Tersedia juga kopi
          lokal Banjarnegara mulai dari Babadan, Kasmaran, Leksana, Ratamba,
          Senggani dan Wanayasa.
        </p>
      </div>
    </section>
  );
};

export default Content;
