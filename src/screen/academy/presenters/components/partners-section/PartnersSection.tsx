import CompanyImage from "components/UI/company/CompanyImage";
import Flex from "components/UI/flex/Flex";
import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React, { useEffect } from "react";
import { isMobile, renderKeyProps } from "utils/fnc";
import "./PartnersSection.scss";
let companyName: string[] = [
  "google",
  "amazon",
  "microsoft",
  "adobe",
  "mindtickle",
  "flipkart",
  "goldman",
  "myntra ",
  "ola",
  "media",
  "olx",
  "nutanix",
  "atlassian",
  "paytm",
  "gojek",
  "qualcomm",
  "paypal",
  "cleartax",
  "capillary",
  "oneplus",
  "uber",
  "wakefit",
  "toppr",
  "snapdeal",
  "nvidia",
  "intuit",
  "salesken",
  "zeta",
  "tekion",
  "samsung",
  "lucideus",
  "ajio",
  "needl",
  "delhivery",
  "dgraph",
];
const PartnersSection = () => {
  const [mobile, setMobile] = React.useState<boolean>();
  useEffect(() => {
    console.log("run");
    setMobile(isMobile());
  }, [navigator.userAgent]);
  return (
    <section className="section partners">
      <div className="sr-container">
        <h3 className="section__header">
          Our <b>alumni</b> work at reputed{" "}
          <TextUnderline contents="technology companies" position="33px" /> and
          promising <TextUnderline contents="startups" position="33px" />
        </h3>
        <Flex classes={["company-container"]}>
          {companyName.map((cpm: string, index: number) => {
            return (
              <div className="parner-company" key={renderKeyProps(cpm, index)}>
                <CompanyImage
                  classes={[cpm, "hover-effect-scaleup", mobile ? "half" : ""]}
                />
              </div>
            );
          })}
        </Flex>
      </div>
    </section>
  );
};
export default PartnersSection;
