import {
  MessengerIcon,
  ZaloIcon,
  FacebookIcon,
  PhoneIconPng,
} from "@/assets/icons";
import Image from "next/image";
import "./css/index.scss";

const SupportHorizontal = () => {
  const supportZalo = "https://zalo.me/2744995084207432799";
  const supportPhone = "+84969877888";
  const supportMessenger = "https://www.messenger.com/t/100093630422263";
  const supportFanpage = "https://www.facebook.com/100093630422263";

  return (
    <div className="app-support-horizontal">
      <div>
        <a target="_blank" href={supportFanpage}>
          <Image
            src={FacebookIcon}
            className="icon-support"
            alt="FacebookIcon"
          />
        </a>
      </div>
      <div>
        <a target="_blank" href={supportMessenger}>
          <Image
            src={MessengerIcon}
            className="icon-support"
            alt="MessengerIcon"
          />
        </a>
      </div>
      <div>
        <a target="_blank" href={supportZalo}>
          <Image src={ZaloIcon} className="icon-support" alt="ZaloIcon" />
        </a>
      </div>
    </div>
  );
};

export default SupportHorizontal;
