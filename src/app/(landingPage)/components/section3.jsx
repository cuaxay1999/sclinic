import { Row, Col, Button } from "antd";
import { ImgSection3 } from "../../../assets/images";
import { CircleCheck } from "@/assets/images";
import BtnRegisterSSR from "@/components/btnRegisterSSR";
import Image from "next/image";

const Section3 = ({ texts }) => {
  return (
    <div className="section section-3">
      <div className="section-content">
        <Row gutter={[50, 20]} className="row-reverse-xs">
          <Col xs={24} md={24} lg={12} className="justify-content--right">
            <div className="ant-col__content">
              <h2 className="section-heading txt-green-color">
                {texts?.EFFICIENT_AND_ACCURATE_WAREHOUSE_MANAGEMENT}
              </h2>

              <Row className="row-nowrap">
                <Image
                  src={CircleCheck}
                  alt="CircleCheck"
                  style={{
                    objectFit: "contain",
                    height: "24px",
                    margin: "0px 8px 0px 0px",
                  }}
                  className="circle-check"
                />

                <Col>
                  <p className="paragraph">{texts?.SMART_REPORT_STATISTICS}</p>
                </Col>
              </Row>

              <Row className="row-nowrap">
                <Image
                  src={CircleCheck}
                  alt="CircleCheck"
                  style={{
                    objectFit: "contain",
                    height: "24px",
                    margin: "0px 8px 0px 0px",
                  }}
                  className="circle-check"
                />

                <Col>
                  <p className="paragraph">
                    {texts?.ORDER_NOTIFICATIONS_REVENUE_FLUCTUATIONS}
                  </p>
                </Col>
              </Row>

              <Row className="row-nowrap">
                <Image
                  src={CircleCheck}
                  alt="CircleCheck"
                  style={{
                    objectFit: "contain",
                    height: "24px",
                    margin: "0px 8px 0px 0px",
                  }}
                  className="circle-check"
                />

                <Col>
                  <p className="paragraph">
                    {texts?.PROVIDE_A_FULL_RANGE_OF_EXPORT}
                  </p>
                </Col>
              </Row>

              <Row>
                <BtnRegisterSSR texts={texts} />
              </Row>
            </div>
          </Col>

          <Col xs={24} md={24} lg={12}>
            <Image
              src={ImgSection3}
              alt="ImgSection3"
              style={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section3;
