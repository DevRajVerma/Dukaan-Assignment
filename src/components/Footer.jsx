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
    <div className="bg-black text-white grid grid-cols-12  ">
      <div className="col-span-5 p-4 font-bold text-3xl flex justify-center">
        <div className="p-0,5 pt-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        </div>
        <div className="p-2">
        Dukaan
        </div>
        
      </div>
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
