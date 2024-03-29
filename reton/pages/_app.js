import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "react-datepicker/dist/react-datepicker.css";

import "react-useanimations/lib/bookmark";

import "../public/css/style.scss";
import "../public/css/responsive.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
