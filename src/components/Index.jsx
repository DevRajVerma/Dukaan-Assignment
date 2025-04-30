import React from 'react'

function Index() {

    const pages = [];
    var currentPage = 1;
    var totalPages = 20;
    if(totalPages <= 5 ){
        for( let i= 1; i <= totalPages; i++){   
            pages.push(i);
        }
    }
    else{
        pages.push(1);  
    }

    if(currentPage > 2 ){
        if(currentPage > 3) pages.push("...");
        pages.push(currentPage);
    }

    if(currentPage < totalPages - 1 ){
        if(currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
    }

  return (

    <div className='flex justify-center items-center mt-4 space-x-2'>
         
    {pages.map((page , idx) =>
    page === "..." ? (
        <span key={idx} className='text-gray-500'>
            ...
        </span>
    ):  (
        <button
        key={idx}
        
        className={`px-3 py-1 rounded-full ${ page === currentPage
         ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-100" } `}>
            {page  }
        </button>   
    ))}
    {currentPage < totalPages && (
        <button
          
          className="text-blue-600 hover:underline ml-2 flex items-center"
        >
          Next →
        </button>
      )}
      
    </div>
  )
}

export default Index
