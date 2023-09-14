import { Button } from "antd";
import "./css/index.scss";
import Link from "next/link";

const BtnRegisterSSR = ({ txtBtn, texts }) => {
  return (
    <Button
      className="btn-register-section"
      size="large"
      type="primary"
      style={{ background: "#fd4e5d" }}
    >
      <Link href="/account">{txtBtn ? txtBtn : texts?.REGISTER_NOW}</Link>
    </Button>
  );
};

export default BtnRegisterSSR;