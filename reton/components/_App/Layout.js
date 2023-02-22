import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";
import Eduardo from "../../eduardo.config";
import Ave from "../../ave.config";

const Layout = ({ children }) => {
  // Preloader
  const config = process.env.NEXT_PUBLIC_WHO === 'Ave' ? Ave : Eduardo
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{config.Layout.description}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content={config.Layout.title}
        />
        <meta
          name="og:title"
          property="og:title"
          content={config.Layout.title2}
        ></meta>
        <meta
          name="twitter:card"
          content={config.Layout.twitter}
        ></meta>
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </React.Fragment>
  );
};

export default Layout;
