import FormContact from "@/components/formContact";
import "./css/index.scss";
import { Row } from "antd";

const ContactPage = () => {
  return (
    <div className="landing-page contact-page">
      <div className="section-contact-page">
        <FormContact />
      </div>
    </div>
  );
};

export default ContactPage;
