import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import AppBanner from "@/components/appBanner";

import "./css/index.scss";

const HomePage = () => {
  return (
    <div className="landing-page home-page">
      <AppBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default HomePage;
