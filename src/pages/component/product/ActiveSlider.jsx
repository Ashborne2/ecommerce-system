import React from 'react'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import ProductCard from './ProductCard';

const ActiveSlider = () => {
    return (
        <div className='h-[100vh]'>

            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                centeredSlides={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Keyboard]}
                className="mySwiper h-[45%] bg-slate-400 flex items-center justify-center"
            >
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book1.jpg'}
                        title={"Dune"}
                        author={"Frank Herbert"}
                        price={"21.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book2.jpg'}
                        title={"Butter"}
                        author={"Asako Uzuki"}
                        price={"34.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book3.jpg'}
                        title={"A Tempest of Tea"}
                        author={"Hafsa Faisal"}
                        price={"23.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book4.jpg'}
                        title={"Crypt"}
                        author={"Alice Roberts"}
                        price={"14.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book5.jpg'}
                        title={"In Memoriam"}
                        author={"Alice Winn"}
                        price={"32.99"}
                    />
                </SwiperSlide>

                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book1.jpg'}
                        title={"Dune"}
                        author={"Frank Herbert"}
                        price={"21.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book2.jpg'}
                        title={"Butter"}
                        author={"Asako Uzuki"}
                        price={"34.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book3.jpg'}
                        title={"A Tempest of Tea"}
                        author={"Hafsa Faisal"}
                        price={"23.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book4.jpg'}
                        title={"Crypt"}
                        author={"Alice Roberts"}
                        price={"14.99"}
                    />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <ProductCard
                        image={'/src/assets/img/latest-book5.jpg'}
                        title={"In Memoriam"}
                        author={"Alice Winn"}
                        price={"32.99"}
                    />
                </SwiperSlide>


            </Swiper>

        </div>
    )
}

export default ActiveSlider
