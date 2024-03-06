import React from 'react'
import Pagination_nonswiper from './component/pagination'
import ProductCard from './component/product/ProductCard'
import BestBook from './component/product/BestBook'

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

        <BestBook
          bestImage={'/src/assets/img/book1.jpg'}
          bestTitle={"The Psychology of Money"}
          bestDescription={" Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the different ways people think about money and teaches you how to make better sense of one of life's most important topics."}
          bestPrice={"14.99"}
        />

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

        <div className=' flex justify-around flex-wrap gap-14'>

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
            className="mySwiper h-[60%] flex items-center justify-center"
          >
            <SwiperSlide className='mb-5'>
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

          {/* <ProductCard
            image={'/src/assets/img/latest-book1.jpg'}
            title={"Dune"}
            author={"Frank Herbert"}
            price={"21.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book2.jpg'}
            title={"Butter"}
            author={"Asako Uzuki"}
            price={"34.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book3.jpg'}
            title={"A Tempest of Tea"}
            author={"Hafsa Faisal"}
            price={"23.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book4.jpg'}
            title={"Crypt"}
            author={"Alice Roberts"}
            price={"14.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book5.jpg'}
            title={"In Memoriam"}
            author={"Alice Winn"}
            price={"32.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book1.jpg'}
            title={"Dune"}
            author={"Frank Herbert"}
            price={"21"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book2.jpg'}
            title={"Butter"}
            author={"Asako Uzuki"}
            price={"34"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book3.jpg'}
            title={"A Tempest of Tea"}
            author={"Hafsa Faisal"}
            price={"23.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book4.jpg'}
            title={"Crypt"}
            author={"Alice Roberts"}
            price={"14.99"}
          />

          <ProductCard
            image={'/src/assets/img/latest-book5.jpg'}
            title={"In Memoriam"}
            author={"Alice Winn"}
            price={"32.99"}
          />       */}


        </div>
      </div>

      <div className='felx flex-col m-7 h-auto'>
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 p-9' >
          <div className='text-2xl  col-start-1 col-end-4'>
            Classic Non Fictional Books
          </div>
          <div className='col-end-7 text-lg font-mono'>
            <a href="">
              View all &#x2192;
            </a>
          </div>

        </div>

        <div className=' flex justify-around flex-wrap gap-14'>

          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            // slidesPerView={6}
            // spaceBetween={30}
            // centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="mySwiper h-[60%] flex items-center justify-center"
          >
            <SwiperSlide className='mb-5'>
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
      </div>




      <Pagination_nonswiper />

    </>
  )
}

export default product
