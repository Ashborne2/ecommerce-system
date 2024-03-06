import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function product_page() {
  return (
    <>
      <Navbar />
      <div className='bg-cyan-400 h-screen max-w-[1280px] px-20 py-10 flex flex-row justify-between'>
        <div className='bg-latest-book1 bg-cover h-80 w-[215px] '>
           
        </div>
        <div>
book description
        </div>


      </div>
      <Footer />


    </>
  )
}

export default product_page
