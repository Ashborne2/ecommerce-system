import React from 'react'

function product() {
  return (
    <>
      <div className='felx flex-col m-7 mt-11'>
        <div className='grid grid-cols-6 gap-4 p-9' >
          <div className='text-2xl  col-start-1 col-end-4'>
            Best selling and most popular products
          </div>
          <div className='col-end-7 text-lg font-mono'>
            <a href="">
              View all
            </a>
          </div>

        </div>
        <div className='bg-teal-50'>
          <div className='grid grid-cols-6 gap-4 p-9'>
            <div className='col-span-2 bg-product-image1 bg-cover bg-center h-96'></div>
            <div className='col-span-4 pr-40'>
              <div className='text-3xl font-bold'>
                The Book of the Month
              </div>
              <div className='text-lg mt-4'>
                Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.
                
                In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the different ways people think about money and teaches you how to make better sense of one of life's most important topics.
              </div>
              <div className='text-lg font-bold pt-8 pl-2 m-2 '>
                $14.99
              </div>
              <button className='bg-lime-500 p-3 m-2 rounded text-cyan-50 hover:bg-lime-600'>
                Add to cart
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className='felx flex-col m-7'>
        <div className='grid grid-cols-6 gap-4 p-9' >
          <div className='text-2xl  col-start-1 col-end-4'>
            Newest Books realesed this month
          </div>
          <div className='col-end-7 text-lg font-mono'>
            <a href="">
              View all
            </a>
          </div>

        </div>

        <div className='bg-cyan-500 flex justify-between'>
          <div className='bg-red-300 w-40 h-96'></div>
          <div className='bg-red-300 w-40 h-96'></div>
          <div className='bg-red-300 w-40 h-96'></div>
          <div className='bg-red-300 w-40 h-96'></div>
          <div className='bg-red-300 w-40 h-96'></div>
          <div className='bg-red-300 w-40 h-96'></div>

        </div>
        {/* <div className='bg-red-100 '>
          <div className='grid grid-cols-6 gap-4 p-9'>
            <div className='col-span-2 bg-product-image1 bg-cover bg-center h-96'></div>
            <div className='col-span-4'>
              <div className='text-3xl font-bold'>
                The Book of the Month
              </div>
              <div className='text-lg'>
                The Book of the Month is a subscription-based book club that delivers hardcover books to your door at an affordable price.
              </div>
              <div className='text-lg font-bold'>
                $14.99
              </div>
            </div>
          </div>

        </div> */}
      </div>
    </>
  )
}

export default product
