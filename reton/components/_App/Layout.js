import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>🇲🇽 Edu's</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Mexican Software engineer, focused on web technologies."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Eduardo's Bautista resume"
        ></meta>
        <meta
          name="twitter:card"
          content="Eduardo's Bautista, come by if you are curious."
        ></meta>
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </React.Fragment>
  );
};

export default Layout;
