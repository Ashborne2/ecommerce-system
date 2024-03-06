import React from 'react'

const BestBook = ({bestTitle,bestDescription,bestPrice,bestImage}) => {
    return (
        <div className='bg-teal-50'>
            <div className='grid grid-cols-6 gap-4 p-9'>
                <div className='col-span-2 h-96'>
                    <img src={bestImage} alt="best book image" className='h-96 object-cover object-center' />
                </div>
                <div className='col-span-4 pr-40 pl-5'>
                    <div className='text-3xl font-bold'>
                        The Book of the Month
                    </div>
                    <div className='mt-3 text-xl font-bold text-yellow-600'>
                        {bestTitle}
                    </div>
                    <div className='text-lg mt-2'>
                       {bestDescription}
                    </div>
                    <div className='text-lg font-bold pt-8 m-2 ml-0'>
                       $ {bestPrice}
                    </div>
                    <button className='bg-lime-500 p-3 m-2 ml-0 rounded text-cyan-50 hover:bg-lime-600'>
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BestBook
