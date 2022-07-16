import type { NextPage } from "next";
import Accordions from "../components/Accardions/Accardions";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Accordions />
      <Footer />
    </>
  );
};

export default Home;
