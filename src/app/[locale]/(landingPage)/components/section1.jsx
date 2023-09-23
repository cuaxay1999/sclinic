import { Row, Col, Button } from "antd";
import { Shop, Warehouse, Calendar } from "@/assets/images";
import { CheckIcon } from "@/assets/images";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Section1 = () => {
  const t = useTranslations("Section1");
  return (
    <div className="section section-1">
      <div className="section-content">
        <h2
          className="section-heading"
          style={{ color: "#484848", fontWeight: 700 }}
        >
          {t(
            "SHOP_HELP_YOU_MANAGE_YOUR_SALES_EASILY_EFFECTIVELY"
          )?.toUpperCase()}
        </h2>

        <Row gutter={[20, 0]} className="row-nowrap content-overflow-x">
          <Col xs={24} md={12} lg={8}>
            <div className="ant-col__content">
              <div className="ant-col__content__center">
                <Image
                  src={Warehouse}
                  alt="Warehouse"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="ant-col__content__bottom">
                <h3 className="ant-col__content__title">
                  {t("EASY_TO_USE_ON_MULTIPLE_PLATFORMS")}
                </h3>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("SMART_INTERFACE_USED_IN_COMPUTERS_SMART_DEVICES")}
                    </p>
                  </Col>
                </Row>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("EFFICIENT_AND_INTELLIGENT_WAREHOUSE_OPERATION")}
                    </p>
                  </Col>
                </Row>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("QUICK_IMPORT_AND_EXPORT_OPERATIONS")}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="ant-col__content">
              <div className="ant-col__content__center">
                <Image
                  src={Shop}
                  alt="Shop"
                  style={{ objectFit: " contain" }}
                />
              </div>

              <div className="ant-col__content__bottom">
                <h3 className="ant-col__content__title">
                  {t("QUICK_INPUT_AND_SALES_MANAGEMENT_INTERFACE")}
                </h3>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("OPERATE_YOUR_CHAIN_AND_STORES_WITH_EASE")}
                    </p>
                  </Col>
                </Row>
                {/*
                <Row className='row-nowrap'>
                  <Col>
                    <Image src={ CheckIcon } alt="CheckIcon" style={{objectFit: "contain"}} className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>{t("INVENTORY_REPORT_HOT_SELLING_PRODUCTS")}</p>
                  </Col>
                </Row>*/}

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("ACCURATE_TO_EACH_PRODUCT_UNIT")}
                    </p>
                  </Col>
                </Row>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("SUPPORT_CUSTOMERS_TO_PLACE_ORDERS_REMOTELY")}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="ant-col__content">
              <div className="ant-col__content__center">
                <Image
                  src={Calendar}
                  alt="Calendar"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="ant-col__content__bottom">
                <h3 className="ant-col__content__title">
                  {t("OPERATE_THE_STORE_REMOTELY_SMOOTHLY_IN_DETAIL")}
                </h3>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("LOOK_UP_IMPORT_AND_EXPORT_HISTORY")}
                    </p>
                  </Col>
                </Row>

                <Row className="row-nowrap">
                  <Image
                    src={CheckIcon}
                    alt="CheckIcon"
                    style={{
                      objectFit: "contain",
                      margin: "5px 8px 0px 0px",
                      height: "10px",
                    }}
                    className="check-icon"
                  />

                  <Col>
                    <p className="paragraph">
                      {t("CALCULATING_SALARY_UPDATED_EVERY_DAY")}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section1;
