import React from 'react'

const ProductCard = ({title,author,price, image}) => {
    return (

        <div className='w-40 h-96 mb-7 hover:scale-90 transition ease-in-out'>
            <div className='bg-cover h-60 mb-2'>
                <img className='h-[250px] w-[200px] object-cover' src={image} alt="product image" />
            </div>
            <div className='flex flex-col items-center justify-between pt-3'>
                <span className='text-lg font-semibold text-yellow-600'>
                    {title}
                </span>
                <span className='font-mono font-thin'>
                    {author}
                </span>
                <span className='font-bold'>
                   ${price}
                </span>
                <button className='bg-slate-500 text-lime-50 pt-2 pb-2 pr-10 pl-10 mt-4 hover:bg-slate-600'>
                    Add to cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard
