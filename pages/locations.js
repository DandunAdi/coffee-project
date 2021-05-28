import Layout from "../components/layout";
import Title from "../components/title";
import styles from "./locations.module.css";

const Locations = () => {
  return (
    <Layout>
      <main style={{ marginTop: "5rem" }}>
        <div className={styles.header}>
          <div style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
            <Title text="LOKASI" size="xxl" color="white" />
          </div>
        </div>
        <div
          className="dot-bg"
          style={{ padding: "2rem", color: "rgba(64,38,13,.83)" }}
        >
          <div>
            <Title text="RUMAH KOPI BANJARNEGARA" size="xl" />
            <p>
              Jl Pemuda Blok E No 25 Komplek Ruko Atrium Square Banjarnegara,
              Krandegan, Kec. Banjarnegara, Banjarnegara, Jawa Tengah 53474
            </p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6117201766087!2d109.69529881498303!3d-7.397329274885783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa93d6d646301%3A0xff6d2e47c980b620!2sRUMAH%20KOPI%20BANJARNEGARA%20(Coffee%20%26%20Resto)!5e0!3m2!1sen!2sid!4v1622223166446!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <section>
            <div className="flex">
              <svg
                style={{ width: "4rem", color: "#979a9d" }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="svg-inline--fa fa-phone fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
            </div>
            <h4
              className="text-center thin lg ls-2"
              style={{ margin: "2rem 0", color: "#404040" }}
            >
              (0286) 5960015
            </h4>
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
            <h4
              className="text-center thin lg ls-2"
              style={{ margin: "2rem 0", color: "#404040" }}
            >
              Weekdays: 14:00 - 23:00
            </h4>
            <h4
              className="text-center thin lg ls-2"
              style={{ margin: "2rem 0", color: "#404040" }}
            >
              Weekend: 09:00 - 23:00
            </h4>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Locations;
