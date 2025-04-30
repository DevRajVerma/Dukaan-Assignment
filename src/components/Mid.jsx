import React from "react";

function Mid() {
  return (
    <div className="flex flex-col p-2 items-center justify-center">
      <svg
        class="w-12 h-12 m-2 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        />
      </svg>

      <h3 className="font-bold text-xl p-2">Search</h3>
      <div className=" text-center text-wrap">
        Simply add a keyword or a term related to your business in the slogan
        maker search box. Wait for the magic to happen.
      </div>
    </div>
  );
}
    
export default Mid;
