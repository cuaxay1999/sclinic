"use client";

import "./css/index.scss";
import { Col, Divider, Row } from "antd";
import { CheckOutlined } from "@mui/icons-material";
import BtnRegister from "@/components/btnRegister";
import { useSelector } from "react-redux";

const PricingPage = () => {
  const texts = useSelector((state) => state.system.texts);

  return (
    <div className="landing-page contact-page">
      <div className="section" style={{ backgroundColor: "#efefef" }}>
        <Row
          className="mt-24 align-item--center main-content-of-pricing"
          gutter={[24, 10]}
        >
          <Col md={24}>
            <div className="w-full flexbox-center">
              <h1 className="package-title-page">
                BẢNG GIÁ & TÍNH NĂNG SCLINIC
              </h1>
            </div>
          </Col>
          <Col md={24} className="mt-24"></Col>
          <Col md={8} className="flexbox-center">
            <div className="item-page w-full" style={{ marginTop: 44 }}>
              <Row className="sub-item-page item-package-01">
                <Col md={24} xs={24}>
                  <h2
                    className="mt-12 flexbox-center package-name "
                    style={{ color: "darkgreen" }}
                  >
                    Gói bạc
                  </h2>
                </Col>
                <Col md={24} xs={24}>
                  <h3 className="flexbox-center package-pricing">
                    99.000 đ{" "}
                    <span className="package-time ml-12"> / tháng </span>
                  </h3>
                </Col>
                <Col md={24} xs={24}>
                  <h3
                    className="flexbox-center package-des"
                    style={{ color: "darkgreen" }}
                  >
                    5 tài khoản đăng nhập
                  </h3>
                </Col>
                <Col md={24} xs={24}>
                  <h3
                    className="flexbox-center package-des"
                    style={{ color: "darkgreen" }}
                  >
                    1 phòng khám
                  </h3>
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Không gới hạn đặt lịch hẹn
                </Col>
              </Row>
              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Không gới hạn phiếu khám
                </Col>
              </Row>
              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý 5.000 hồ sơ khách hàng
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý kho hàng
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý nhà cung cấp
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý nhân viên
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Báo cáo vận hành
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Báo cáo tài chính
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Báo cáo khách hàng
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Công nợ khách hàng
                </Col>
              </Row>
              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Công nợ phòng khám
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  App dành cho nhân viên, lễ tân, bác sĩ, quản lý
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  10G dữ liệu, hình ảnh
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  <h4 style={{ color: "forestgreen" }}>Hỗ trợ 24/7</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={8} className="flexbox-center">
            <div className="item-page w-full" style={{ marginTop: 44 }}>
              <Row className="sub-item-page item-package-02">
                <Col md={24} xs={24}>
                  <h2
                    className="mt-12 flexbox-center package-name "
                    style={{ color: "orange" }}
                  >
                    Gói vàng
                  </h2>
                </Col>
                <Col md={24} xs={24}>
                  <h3 className="flexbox-center package-pricing">
                    399.000 đ{" "}
                    <span className="package-time ml-12"> / tháng </span>
                  </h3>
                </Col>
                <Col md={24} xs={24}>
                  <h3
                    className="flexbox-center package-des"
                    style={{ color: "orange" }}
                  >
                    20 tài khoản đăng nhập
                  </h3>
                </Col>
                <Col md={24} xs={24}>
                  <h3
                    className="flexbox-center package-des"
                    style={{ color: "orange" }}
                  >
                    1 phòng khám
                  </h3>
                </Col>
              </Row>
              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={24}>
                  Bao gồm tính năng gói{" "}
                  <span style={{ fontWeight: 600 }}>bạc</span>
                </Col>
              </Row>
              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Đặt lịch online
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý 30.000 hồ sơ khách hàng
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Ghi nhận đánh giá của khách hàng
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý thẻ trả trước
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý thuốc và đơn thuốc
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Chấm công nhân viên
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Quản lý lương, hoa hồng, thù lao dịch vụ
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  Phân hạng khách và loyalty
                </Col>
              </Row>

              <Row className="ml-4 mt-12" gutter={[12, 0]}>
                <Col md={2} xs={2}>
                  <div className="icon-checked">
                    <CheckOutlined className="box-icon-checked" />
                  </div>
                </Col>
                <Col md={22} xs={22}>
                  25G dữ liệu, hình ảnh
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={8} className="flexbox-center">
            <div className="supper-box">
              <Row className="w-full">
                <div className="flexbox-center w-full">
                  <h2 style={{ color: "white" }} className="mt-4">
                    Được mua nhiều nhất
                  </h2>
                </div>
              </Row>
              <div className="item-page w-full">
                <Row className="sub-item-page item-package-03">
                  <Col md={24} xs={24}>
                    {" "}
                    <h2
                      className="mt-12 flexbox-center package-name "
                      style={{ color: "darkcyan" }}
                    >
                      Gói kim cương
                    </h2>
                  </Col>
                  <Col md={24} xs={24}>
                    <h3 className="flexbox-center package-pricing">
                      999.000 đ{" "}
                      <span className="package-time ml-12"> / tháng </span>
                    </h3>
                  </Col>
                  <Col md={24} xs={24}>
                    <h3
                      className="flexbox-center package-des"
                      style={{ color: "darkcyan" }}
                    >
                      50 tài khoản đăng nhập
                    </h3>
                  </Col>
                  <Col md={24} xs={24}>
                    <h3
                      className="flexbox-center package-des"
                      style={{ color: "darkcyan" }}
                    >
                      2 phòng khám
                    </h3>
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={24}>
                    Bao gồm tính năng gói{" "}
                    <span style={{ fontWeight: 600 }}>vàng</span>
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Quản lý không giới hạn hồ sơ khách hàng
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Chuyển kho sản phẩm, vật tư
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Hệ thống quản lý CRM
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Nhắc lịch khách hàng
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Nhật ký làm việc của nhân viên
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Công cụ affilate mở rộng khách hàng
                  </Col>
                </Row>

                <Row className="ml-4 mt-12" gutter={[12, 0]}>
                  <Col md={2} xs={2}>
                    <div className="icon-checked">
                      <CheckOutlined className="box-icon-checked" />
                    </div>
                  </Col>
                  <Col md={22} xs={22}>
                    Không giới hạn dung lượng lưu trữ dữ liệu, hình ảnh
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col md={24} xs={24} className="flexbox-center">
            <div className="mt-24 w-full flexbox-center">
              <BtnRegister txtBtn={texts?.SIGN_UP_TRIAL} />
            </div>
          </Col>

          {/*                    <Col md={6}>
                        <div className='item-page w-full' style={{marginTop: 44}}>
                            <Row className='sub-item-page item-package-04'>
                                <Col md={24}><h1 className='mt-12 flexbox-center package-name'
                                                 style={{color: "chocolate"}}>Gói nâng cao</h1></Col>
                                <Col md={24}><h1 className='flexbox-center package-pricing'>999.000 đ <span
                                    className='package-time ml-12'> / tháng </span></h1></Col>
                                <Col md={24}><h1 className='flexbox-center package-des'
                                                 style={{color: "chocolate"}}>Không gới hạn nhân viên</h1></Col>
                            </Row>

                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={24}>Tính năng gói <span style={{fontWeight: 600}}>tiêu chuẩn</span></Col>
                            </Row>
                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Tích hợp chăm sóc khách hàng nhắn tin OA, ZNS</Col>
                            </Row>
                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Theo dõi fanpage, comment, nhắn tin</Col>
                            </Row>

                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Chiến dịch remarketing khách hàng cũ</Col>
                            </Row>

                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Công cụ affilate mở rộng khách hàng</Col>
                            </Row>

                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Tổng đài call tập trung</Col>
                            </Row>

                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Nhắc lịch khách hàng</Col>
                            </Row>

                            <Row className='ml-4 mt-12' gutter={[12, 0]}>
                                <Col md={2}><div className='icon-checked'><CheckOutlined className='box-icon-checked'/></div></Col>
                                <Col md={22}>Không giới hạn dung lượng dữ liệu</Col>
                            </Row>

                        </div>
                    </Col>*/}
        </Row>
      </div>

      <div
        style={{ backgroundColor: "white" }}
        className="main-content-more-feature-pricing"
      >
        <Col md={24}>
          <div className="w-full mt-24 flexbox-center">
            <h2 style={{ fontSize: 20 }}>Bảng giá tính năng mở rộng</h2>
          </div>
        </Col>

        <Col md={24}>
          <div className="w-full" style={{ marginTop: 36, height: 420 }}>
            <Row>
              <Col md={16} xs={24} className="div-feature-pricing">
                <span className="ml-8">Tích hợp SMS brandname</span>
              </Col>
              <Col md={8} xs={24}>
                <div className="w-full div-pricing">
                  <h4>300.000 đ /tháng</h4>
                </div>
              </Col>
            </Row>
            <Divider style={{ marginTop: 8, marginBottom: 16 }}></Divider>
            <Row>
              <Col md={16} xs={24} className="div-feature-pricing">
                <span className="ml-8">Tích hợp Zalo ZNS</span>
              </Col>
              <Col md={8} xs={24}>
                <div className="w-full div-pricing">
                  <h4>200.000 đ /tháng</h4>
                </div>
              </Col>
            </Row>
            <Divider style={{ marginTop: 8, marginBottom: 16 }}></Divider>
            <Row>
              <Col md={16} xs={24} className="div-feature-pricing">
                <span className="ml-8">App thương hiệu trên Android, IOS</span>
              </Col>
              <Col md={8} xs={24}>
                <div className="w-full div-pricing">
                  <h4>Liên hệ báo giá</h4>
                </div>
              </Col>
            </Row>
            <Divider style={{ marginTop: 8, marginBottom: 16 }}></Divider>
            <Row>
              <Col md={16} xs={24} className="div-feature-pricing">
                <span className="ml-8">App thương hiệu trên Mini App Zalo</span>
              </Col>
              <Col md={8} xs={24}>
                <div className="w-full div-pricing">
                  <h4>Liên hệ báo giá</h4>
                </div>
              </Col>
            </Row>
            <Divider style={{ marginTop: 8, marginBottom: 16 }}></Divider>
            <Row>
              <Col md={16} xs={24} className="div-feature-pricing">
                <span className="ml-8 div-feature-pricing w-full">
                  Tích hợp tổng đài CSKH, hệ thống Acounting, Einvoice, CRM (ứng
                  dụng bên thứ 3)
                </span>
              </Col>
              <Col md={8} xs={24}>
                <div className="w-full div-pricing">
                  <h4>Liên hệ báo giá</h4>
                </div>
              </Col>
            </Row>
            <Divider style={{ marginTop: 8, marginBottom: 8 }}></Divider>
          </div>
        </Col>
      </div>

      {/*        <Row className='mt-24' style={{backgroundColor:"white"}}>
                <div className='w-full flexbox-center'>
                    <div className='package-title-page'>BỘ CÂU HỎI THƯỜNG GẶP</div>
                </div>
            </Row>*/}
    </div>
  );
};

export default PricingPage;
