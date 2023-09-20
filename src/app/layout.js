import { RootStyleRegistry } from "@/lib/AntdRegistry";
import Provider from "@/redux/provider";
import "@/assets/css/index.scss";
import BaseLayout from "@/components/baselayout";
import Script from "next/script";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SClinic - smart clinic",
  description:
    "SCLINIC - ứng dụng quản lý chuyên nghiệp dành riêng cho ngành y tế, nha khoa,… Phù hợp với phòng khám nhỏ và các chuỗi phòng khám.",
  keywords: ["SCLINIC", "phòng khám", "smart clinic", "ứng dụng quản lý"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RootStyleRegistry>
          <Provider>
            <BaseLayout className="app-container">{children}</BaseLayout>
            <div id="recaptcha-container"></div>
          </Provider>
        </RootStyleRegistry>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-989420766" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-989420766');
        `}
      </Script>
    </html>
  );
}
