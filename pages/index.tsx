import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Masthead from "../components/Masthead";
import IconsGrid from "../components/IconsGrid";
import ImageShowcases from "../components/ImageShowcases";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Masthead />
      <IconsGrid />
      <ImageShowcases />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
