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
              View all &#x2192;
            </a>
          </div>

        </div>
        <div className='bg-teal-50'>
          <div className='grid grid-cols-6 gap-4 p-9'>
            <div className='col-span-2 bg-product-image1 bg-cover bg-center h-96'></div>
            <div className='col-span-4 pr-40 pl-5'>
              <div className='text-3xl font-bold'>
                The Book of the Month
              </div>
              <div className='text-lg mt-4'>
                Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.
                
                In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the different ways people think about money and teaches you how to make better sense of one of life's most important topics.
              </div>
              <div className='text-lg font-bold pt-8 m-2 ml-0'>
                $14.99
              </div>
              <button className='bg-lime-500 p-3 m-2 ml-0 rounded text-cyan-50 hover:bg-lime-600'>
                Add to cart
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className='felx flex-col m-7 h-auto'>
        <div className='grid grid-cols-6 gap-4 p-9' >
          <div className='text-2xl  col-start-1 col-end-4'>
            Newest Books realesed this month
          </div>
          <div className='col-end-7 text-lg font-mono'>
            <a href="">
              View all &#x2192;
            </a>
          </div>

        </div>

        <div className=' flex justify-around flex-wrap gap-20'>

          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book1 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                Dune
              </span>
              <span className='font-mono font-thin'>
                Frank Herbert
              </span>
              <span className='font-bold'>
                $54.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>         
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book2 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                Butter
              </span>
              <span className='font-mono font-thin'>
                Asako Uzuki
              </span>
              <span className='font-bold'>
                $41.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book3 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                A Tempest of Tea
              </span>
              <span className='font-mono font-thin'>
                Hafsa Faisal
              </span>
              <span className='font-bold'>
                $23.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book4 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                Crypt
              </span>
              <span className='font-mono font-thin'>
                Alice Roberts
              </span>
              <span className='font-bold'>
                $14.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book5 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                In Memoriam
              </span>
              <span className='font-mono font-thin'>
                Alice Winn
              </span>
              <span className='font-bold'>
                $32.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book1 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                Dune
              </span>
              <span className='font-mono font-thin'>
                Frank Herbert
              </span>
              <span className='font-bold'>
                $54.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>         
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book2 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                Butter
              </span>
              <span className='font-mono font-thin'>
                Asako Uzuki
              </span>
              <span className='font-bold'>
                $41.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book3 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                A Tempest of Tea
              </span>
              <span className='font-mono font-thin'>
                Hafsa Faisal
              </span>
              <span className='font-bold'>
                $23.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book4 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                Crypt
              </span>
              <span className='font-mono font-thin'>
                Alice Roberts
              </span>
              <span className='font-bold'>
                $14.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='w-40 h-96 hover:scale-90 transition ease-in-out'>
            <div className='bg-latest-book5 bg-cover h-60 p-5 mb-2'>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <span className='text-lg font-semibold text-yellow-600'>
                In Memoriam
              </span>
              <span className='font-mono font-thin'>
                Alice Winn
              </span>
              <span className='font-bold'>
                $32.99
              </span>
              <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                Add to cart
              </button>
            </div>
          </div>
          

        </div>      
      </div>
    </>
  )
}

export default product
