import React from 'react'
import Product from './Product'

function ProductGrid() {
  return (
    
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>

      <Product/>
      <Product/>
      <Product/>  
      <Product/>  
    </div>
  )
}

export default ProductGrid
