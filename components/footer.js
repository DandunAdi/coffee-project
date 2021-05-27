import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className="flex" style={{ padding: "3rem 0" }}>
        <Image src="/images/rumahkopi.png" width="100" height="100" />
      </div>
      <div className="flex">
        <svg
          className="mk-svg-icon"
          data-name="mk-jupiter-icon-facebook"
          data-cacheid="icon-60ae3f13e014b"
          style={{ height: "48px", width: "48px", color: "#979a9d" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256-6.4c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm64.057 159.299h-49.041c-7.42 0-14.918 7.452-14.918 12.99v19.487h63.723c-2.081 28.41-6.407 64.679-6.407 64.679h-57.566v159.545h-63.929v-159.545h-32.756v-64.474h32.756v-33.53c0-8.098-1.706-62.336 70.46-62.336h57.678v63.183z"
          ></path>
        </svg>
        <svg
          className="mk-svg-icon"
          data-name="mk-jupiter-icon-twitter"
          data-cacheid="icon-60ae3f13e0239"
          style={{
            height: "48px",
            width: "48px",
            color: "#979a9d",
            margin: "0 2rem",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256-6.4c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm146.24 258.654c-31.365 127.03-241.727 180.909-338.503 49.042 37.069 35.371 101.619 38.47 142.554-3.819-24.006 3.51-41.47-20.021-11.978-32.755-26.523 2.923-41.27-11.201-47.317-23.174 6.218-6.511 13.079-9.531 26.344-10.407-29.04-6.851-39.751-21.057-43.046-38.284 8.066-1.921 18.149-3.578 23.656-2.836-25.431-13.295-34.274-33.291-32.875-48.326 45.438 16.866 74.396 30.414 98.613 43.411 8.626 4.591 18.252 12.888 29.107 23.393 13.835-36.534 30.915-74.19 60.169-92.874-.493 4.236-2.758 8.179-5.764 11.406 8.298-7.535 19.072-12.719 30.027-14.216-1.257 8.22-13.105 12.847-20.249 15.539 5.414-1.688 34.209-14.531 37.348-7.216 3.705 8.328-19.867 12.147-23.872 13.593-2.985 1.004-5.992 2.105-8.936 3.299 36.492-3.634 71.317 26.456 81.489 63.809.719 2.687 1.44 5.672 2.1 8.801 13.341 4.978 37.521-.231 45.313-5.023-5.63 13.315-20.268 23.121-41.865 24.912 10.407 4.324 30.018 6.691 43.544 4.396-8.563 9.193-22.379 17.527-45.859 17.329z"
          ></path>
        </svg>
        <svg
          className="mk-svg-icon"
          data-name="mk-jupiter-icon-instagram"
          data-cacheid="icon-60ae3f13e033a"
          style={{ height: "48px", width: "48px", color: "#979a9d" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M375.3,197.7L375.3,197.7c-0.6-11.5-2.2-20.4-5-27.1c-2.5-6.7-5.7-11.8-10.9-17c-5.9-5.5-10.5-8.4-16.9-10.9 c-4.1-1.8-11.3-4.3-27.1-5c-15.4-0.7-20.4-0.7-58.8-0.7s-43.4,0-58.8,0.7c-11.5,0.6-20.4,2.2-27,5c-6.7,2.5-11.8,5.7-17,10.9 c-5.5,5.9-8.4,10.5-10.9,16.9c-1.8,4.1-4.3,11.3-5,27.1c-0.7,15.4-0.7,20.4-0.7,58.8s0,43.4,0.7,58.8c0.4,14.3,2.9,22,5,27.1 c2.5,6.7,5.7,11.8,10.9,17c5.9,5.5,10.5,8.4,16.9,10.9c4.1,1.8,11.3,4.3,27.1,5c15.4,0.7,20.4,0.7,58.8,0.7s43.4,0,58.8-0.7 c11.5-0.6,20.4-2.2,27-5c6.7-2.5,11.8-5.7,17-10.9c5.5-5.9,8.4-10.5,10.9-16.9c1.8-4.1,4.3-11.3,5-27.1l0.2-3.4 c0.6-13.1,0.9-19.7,0.5-55.5C376,218,376,213.1,375.3,197.7z M351.4,178.7c0,9.4-7.7,17.1-17.1,17.1c-9.4,0-17.1-7.7-17.1-17.1 c0-9.4,7.7-17.1,17.1-17.1C343.7,161.6,351.4,169.3,351.4,178.7z M256.5,330.6c-40.9,0-74.1-33.2-74.1-74.1 c0-40.9,33.2-74.1,74.1-74.1c40.9,0,74.1,33.2,74.1,74.1C330.6,297.4,297.4,330.6,256.5,330.6z"
          ></path>
          <ellipse
            fill="currentColor"
            transform="matrix(0.9732 -0.2298 0.2298 0.9732 -52.0702 65.7936)"
            cx="256.5"
            cy="256.5"
            rx="48.9"
            ry="48.9"
          ></ellipse>
          <path
            fill="currentColor"
            d="M437.9,75.1C389.4,26.7,325,0,256.5,0C188,0,123.6,26.7,75.1,75.1S0,188,0,256.5C0,325,26.7,389.4,75.1,437.9 C123.6,486.3,188,513,256.5,513c68.5,0,132.9-26.7,181.4-75.1C486.3,389.4,513,325,513,256.5C513,188,486.3,123.6,437.9,75.1z  M400.8,316.4L400.8,316.4c-0.6,14.1-2.7,24.7-6.8,35.3c-4.2,10.5-9.2,18.2-16.7,25.6c-8,8-16,13.2-25.6,16.7 c-10.4,4-21.3,6.1-35.3,6.8c-15.4,0.7-20.5,0.7-59.9,0.7c-39.3,0-44.4,0-59.9-0.7c-14.1-0.6-24.7-2.6-35.3-6.8 c-10.5-4.2-18.2-9.2-25.6-16.7c-8.1-8.1-13.2-16-16.7-25.6c-4-10.4-6.1-21.3-6.8-35.3c-0.7-15.4-0.7-20.5-0.7-59.9 c0-39.3,0-44.4,0.7-59.9c0.6-14.1,2.6-24.7,6.8-35.3c3.9-9.7,9-17.6,16.7-25.6c8.1-8.1,16-13.2,25.6-16.7c10.4-4,21.3-6.1,35.3-6.8 c15.4-0.7,20.5-0.7,59.9-0.7c39.3,0,44.4,0,59.9,0.7c14.1,0.6,24.7,2.6,35.3,6.8c10.5,4.2,18.1,9.2,25.6,16.7 c8,8.1,13.2,16,16.7,25.6c4,10.4,6.1,21.3,6.8,35.3c0.7,15.4,0.7,20.5,0.7,59.9C401.5,295.8,401.5,300.9,400.8,316.4z"
          ></path>
        </svg>
      </div>
      <div>
        <p
          className="xs text-center font-primary"
          style={{ color: "#fff", padding: "2rem" }}
        >
          &copy; 2021 Rumah Kopi Banjarnegara | Jl Pemuda Blok E No 25 Komplek
          Ruko Atrium Square Banjarnegara, Krandegan, Kec. Banjarnegara,
          Banjarnegara, Jawa Tengah 53474 | Tel. +622865960015{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
