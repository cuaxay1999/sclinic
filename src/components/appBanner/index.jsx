import { Row, Col, Button } from "antd";
import { ImageBanner1 } from "@/assets/images";
import { CheckOutlined } from "@mui/icons-material";
import Image from "next/image";
import BtnRegisterSSR from "../btnRegisterSSR";
import { useTranslations } from "next-intl";

import "./css/index.scss";

const AppBaner = () => {
  const t = useTranslations("AppBaner");
  return (
    <div className="app-banner">
      <div className="app-banner__content ">
        <div className="banner-1">
          <Row className="row-reverse-xs">
            <Col xs={24} md={24} lg={12}>
              <h1 className="banner-heading">
                {t("INTELLIGENT_SALES_MANAGEMENT_PLATFORM")}
              </h1>

              <Row gutter={[8, 8]} className="row-nowrap">
                <Col>
                  <span
                    className="banner-title ml-12"
                    style={{ color: "#038ac2" }}
                  >
                    <CheckOutlined /> {t("SIMPLE_CONVENIENT_AND_EASY_TO_USE")}
                  </span>
                </Col>
              </Row>

              <Row gutter={[8, 8]} className="row-nowrap">
                <Col>
                  <span
                    className="banner-title ml-12"
                    style={{ color: "#038ac2" }}
                  >
                    <CheckOutlined /> {t("OPTIMIZING_THE_SALES_PROCESS")}
                  </span>
                </Col>
              </Row>

              <Row gutter={[8, 6]} className="row-nowrap">
                <Col className="ant-col">
                  <span
                    className="banner-title ml-12"
                    style={{ color: "#038ac2" }}
                  >
                    <CheckOutlined />{" "}
                    {t("COMPREHENSIVE_CUSTOMER_CARE_SOLUTION")}
                  </span>
                </Col>
              </Row>

              <div className="btns">
                <Row gutter={[20, 20]} className="row-nowrap">
                  <Col>
                    <BtnRegisterSSR txtBtn={t("LOG_IN")} />
                  </Col>

                  <Col>
                    <BtnRegisterSSR
                      txtBtn={t("USE_FREE") || t("SIGN_UP_TRIAL")}
                    />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={24} md={24} lg={12}>
              <Image
                src={ImageBanner1}
                alt="ImageBanner1"
                style={{ objectFit: "contain" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AppBaner;
