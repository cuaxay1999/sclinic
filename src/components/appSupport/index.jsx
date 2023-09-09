"use client";

import MessengerIcon from "../../assets/icons/files-icon/messenger-icon.png";
import ZaloIcon from "../../assets/icons/files-icon/zalo-icon.png";
import FacebookIcon from "../../assets/icons/files-icon/facebook-icon.png";
import PhoneIconPng from "../../assets/icons/files-icon/phone-icon.png";
import Image from "next/image";
import "./css/index.scss";
import { Space } from "antd";

const AppSupport = (props) => {
  const {
    supportZalo = "https://zalo.me/2744995084207432799",
    supportPhone = "+84969877888",
    supportMessenger = "https://www.messenger.com/t/100093630422263",
    supportFanpage = "https://www.facebook.com/100093630422263",
  } = props;

  return (
    <div className="app-support">
      <Space>
        <a target="_blank" href={supportFanpage}>
          <Image
            src={FacebookIcon}
            className="icon-support"
            alt="FacebookIcon"
          />
        </a>
        <a target="_blank" href={supportMessenger}>
          <Image
            src={MessengerIcon}
            className="icon-support"
            alt="MessengerIcon"
          />
        </a>
        <a target="_blank" href={supportZalo}>
          <Image src={ZaloIcon} className="icon-support" alt="ZaloIcon" />
        </a>
        <a target="_blank" href={`tel:${supportPhone}`}>
          <Image
            src={PhoneIconPng}
            className="icon-support"
            alt="PhoneIconPng"
          />
        </a>
      </Space>
    </div>
  );
};

export default AppSupport;
