import Head from "next/head";
import Footer from "./footer";
import GoTopButton from "./goTopButton";
import Navbar from "./navbar";

export const siteTitle = "The Best Coffee Shop in Town";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The best coffee shop in Bandung" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main>
        {children}
        <GoTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
