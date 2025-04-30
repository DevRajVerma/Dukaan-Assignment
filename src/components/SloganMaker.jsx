import React from "react";

function SloganMaker() {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Free slogan maker</h2>
          <p className="text-gray-600 mb-6">
            Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            Generate slogans
          </button>
        </div>
  );
}

export default SloganMaker;
