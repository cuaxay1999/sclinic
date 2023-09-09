// "use client";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import AppBanner from "@/components/appBanner";

import "./css/index.scss";

const HomePage = () => {
  const gotoLoginPage = () => {
    window.navigatePage("ACCOUNT");
  };

  // const handleGoToServicePriceList = () => {
  //   // window.location.href = "#service-price-list"
  // };

  console.log("process.env 111 ", process.env);

  return (
    <div className="landing-page home-page">
      <AppBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      {/* <Section6 gotoLoginPage={gotoLoginPage}/> */}
    </div>
  );
};

export default HomePage;
