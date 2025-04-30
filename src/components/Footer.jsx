import React from "react";
import FooterTitle from "./FooterTitle";

function Footer() {
  const titles = [
    "Contact",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
    "FAQ",
    "Contact",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
    "FAQ",
  ];
  return (
    <div className="bg-black text-white grid grid-cols-12 ">
      <div className="col-span-5 p-4">Dukaan</div>
      <div className="col-span-7">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
          {titles.map((title, index) => (
            <FooterTitle key={index} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
