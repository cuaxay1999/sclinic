import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import AppBanner from "@/components/appBanner";
// import { cookies } from "next/headers";
// import { SSPA_LOCALE } from "@/utils/constants/config";

import "../css/index.scss";
import { getLocaleConfigByCountryCode } from "@/app/(auth)/languageSetting/actions";

// export function generateStaticParams() {
//   return [{ locale: "vi" }, { locale: "ja" }, { locale: "en" }];
// }

const HomePage = async ({ params }) => {
  const { locale } = params;
  let texts = {};

  const getLanguageText = async () => {
    const res = await getLocaleConfigByCountryCode({
      countryCode: locale,
      filter: "ClINIC",
    });

    if (res.data.status.code == 200) {
      res.data.data.forEach((e) => {
        texts = { ...texts, ...e };
      });
    }
  };

  await getLanguageText();

  // cookies().set({ [SSPA_LOCALE]: locale });

  return (
    <div className="landing-page home-page">
      <AppBanner texts={texts} />
      <Section1 texts={texts} />
      <Section2 texts={texts} />
      <Section3 texts={texts} />
      <Section4 texts={texts} />
    </div>
  );
};

export default HomePage;
