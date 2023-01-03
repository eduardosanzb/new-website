import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-datepicker/dist/react-datepicker.css";

import "react-useanimations/lib/bookmark";

import Analytics from "@vercel/analytics/react"


import "../public/css/style.css";
import "../public/css/responsive.css";

import Layout from "../components/_App/Layout";

console.log(Analytics)
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    <Analytics />
    </Layout>
  );
};

export default MyApp;
