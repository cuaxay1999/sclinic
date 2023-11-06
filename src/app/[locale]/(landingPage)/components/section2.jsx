import { Row, Col, Button } from "antd";
import { ImgSection2 } from "@/assets/images";
import { CircleCheck } from "@/assets/images";
import BtnRegisterSSR from "@/components/btnRegisterSSR";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Section2 = () => {
  const t = useTranslations("Section2");
  return (
    <div className="section section-2">
      <div className="section-content">
        <Row gutter={[50, 20]}>
          <Col xs={24} md={24} lg={12}>
            <Image
              src={ImgSection2}
              alt="ImgSection2"
              style={{ objectFit: "contain" }}
            />
          </Col>

          <Col xs={24} md={24} lg={12}>
            <div className="ant-col__content">
              <h2 className="section-heading txt-green-color">
                {t("PIONEERING_IN_PROVIDING_ONLINE_AND_OFFLINE")}
              </h2>

              <p className="paragraph">
                <span className="txt-sshop"></span>
              </p>

              <Row className="row-nowrap">
                <Image
                  src={CircleCheck}
                  className="circle-check"
                  alt="circle check"
                  style={{
                    objectFit: "contain",
                    height: "24px",
                    margin: "0px 8px 0px 0px",
                  }}
                />

                <Col>
                  <p className="paragraph">
                    {t("CREATE_A_CHAIN_OF_STORES_FUNCTIONAL")}
                  </p>
                </Col>
              </Row>

              <Row className="row-nowrap">
                <Image
                  src={CircleCheck}
                  className="circle-check"
                  alt="circle check"
                  style={{
                    objectFit: "contain",
                    height: "24px",
                    margin: "0px 8px 0px 0px",
                  }}
                />

                <Col>
                  <p className="paragraph">{t("APPLYING_AI_TECHNOLOGY")}</p>
                </Col>
              </Row>

              <Row className="row-nowrap">
                <Image
                  src={CircleCheck}
                  className="circle-check"
                  alt="circle check"
                  style={{
                    objectFit: "contain",
                    height: "24px",
                    margin: "0px 8px 0px 0px",
                  }}
                />

                <Col>
                  <p className="paragraph">{t("CAPTURE_CUSTOMER_NEEDS")}</p>
                </Col>
              </Row>

              <Row>
                <BtnRegisterSSR txtBtn={t("REGISTER_NOW")} />
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section2;
