// App.jsx or your component file

import SloganMaker from "./SloganMaker";
import TextList from "./TextList";
import Line from "./Line";
import Index from "./Index";
import { useState } from "react";

export default function Overlap() {

  // const [page, setPage] = useState(1);
    return (
      <div className="min-h-screen bg-gray-100 pb-6">
        {/* Blue Header */}
        <div className="bg-blue-700 h-48 relative">
          {/* Optional: Logo or navigation here */}
        </div>
  
        {/* White Card overlapping the header */}
        <div className="-mt-20 z-10 relative mx-auto w-11/12 max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <SloganMaker/>
        <Line/>
        <TextList/>
        <Line/>
        <Index/>

        
        
        </div>
      </div>
    );
  }
  