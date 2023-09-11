"use client";

import { LogoSSHOP } from "@/assets/images";
import { Menu, Button } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import SelectLanguage from "../../selectLanguage";
import { getRouterByLocation } from "@/utils/helpers";
import { useSelector } from "react-redux";
import ROUTERS from "@/utils/constants/routers";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const NavBar = (props) => {
  const { handleToggleMenuMobile } = props;
  const router = useRouter;
  const pathname = usePathname();
  const texts = useSelector((state) => state.system.texts);

  const itemMenu = ROUTERS.LANDING_PAGE.filter((it) => it.onMenu).map((it) => ({
    label: texts[it?.label],
    key: it?.name,
    path: it?.path,
    icon: typeof window !== "undefined" && window.isMobile ? it?.icon : null,
  }));

  console.log(itemMenu);

  const itemButton = ROUTERS.LANDING_PAGE.filter((it) => it.onMenu).map(
    (it) => ({
      laybel: (
        <Link key={it?.name} href={it?.path}>
          {it?.label}
        </Link>
      ),
    })
  );

  console.log(itemButton);

  // const menuOnClick = (item) => {
  //   if (item.key !== "SELECT_LANGUAGE" && item.key !== "BUTTON_PHONE") {
  //     window.navigatePage(item?.key);
  //   }
  // };

  const callSupport = () => {
    if (typeof window !== "undefined") {
      window.open(`tel:${texts?.SUPPORT_PHONE}`);
    }
  };

  return (
    <div className="nav-bar" onClick={handleToggleMenuMobile}>
      <div className="nav-bar__content" onClick={(e) => e.stopPropagation()}>
        {typeof window !== "undefined" && window.isMobile && (
          <Image
            className="logo-only-mobile"
            src={LogoSSHOP}
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        )}
        <Menu
          defaultOpenKeys={getRouterByLocation(pathname)?.name}
          selectedKeys={getRouterByLocation(pathname)?.name}
          mode={
            typeof window !== "undefined" && window.isMobile
              ? "vertical"
              : "horizontal"
          }
          items={[
            // ...itemMenu,
            {
              label: <Link href="/">Trang chủ</Link>,
              key: "HOME_PAGE",
            },
            {
              label: <Link href="/news">Tin tức</Link>,
              key: "NEWS_PAGE",
            },
            {
              label: <Link href="/pricing-page">Bảng giá</Link>,
              key: "PRICING_PAGE",
            },
            {
              label: <Link href="/contact-page">Liên hệ</Link>,
              key: "CONTACT_PAGE",
            },
            {
              label: <Link href="/guides">Hướng dẫn</Link>,
              key: "GUIDES",
            },
            {
              label: <SelectLanguage />,
              key: "SELECT_LANGUAGE",
            },
            {
              label: (
                <Button
                  icon={<PhoneFilled />}
                  size={"large"}
                  className="button-primary-outline"
                  onClick={callSupport}
                >
                  {texts?.SUPPORT_PHONE?.replace("+84", "0")}
                </Button>
              ),
              key: "BUTTON_PHONE",
            },
          ]}
          // onClick={menuOnClick}
        />
      </div>
    </div>
  );
};

export default NavBar;
