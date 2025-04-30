import React from "react";

function Product() {
  return (
    <div className="p-4 w-full mx-auto">
      <div className="flex flex-col items-center w-full shadow-sm">
        <img
          className="rounded-xl h-40 w-full object-cover"
          src="images/image.png"
          alt=""
        />
        <div className="p-4 space-y-2">
          <h2 className=" text-lg font-semibold">Privacy Policy Generator</h2>
          <p className="text-wrap  text-sm text-gray-500">
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
