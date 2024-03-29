import React from "react";
import Logo from "../assets/img/Rakuten_logo.png";
import cartlogo from "../assets/img/cart.png";
import wishlist from "../assets/img/wishlist.png"
import categories from "../assets/img/categories.png"

function navbar() {
  return (
    <>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
        {/* <a className="text-2xl font-bold text-violet-600 dark:text-white" href="#">
        TailwindFlex
    </a> */}
        <a href="" >
          <img className="h-10 w-50" src={Logo} alt="logo" />
        </a>
        

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-red-600 dark:text-gray-100 p-1"
            id="navbar_burger"
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hamberger menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <div className=" relative mx-auto text-gray-600">
              <input
                className="border border-gray-300 placeholder-current h-11 px-5 pr-16 w-80 rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200 "
                type="search"
                name="search"
                placeholder="Search By title, author or ISBN"
              />

              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </li>
        </ul>

        <div className="hidden lg:flex">
          {/* <button
            id="theme-toggle"
            type="button"
            className="hidden lg:inline-block lg:ml-auto py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-6 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-6 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
           <div className="py-2 px-4 flex flex-col items-center">
            <img className="size-7" src={categories} alt="catimg" />
            <span>Category</span>
          </div>

          <div className="py-2 px-4 flex flex-col items-center">
            <img className="size-7" src={wishlist} alt="wishimg" />
            <span>Wishlist</span>
          </div>

          <div className="py-2 px-4">
            <img className="size-7" src={cartlogo} alt="cart logo" />
            <span>Cart</span>
          </div>

          

          <a href="">
            <button className=" py-4 px-7 m-1 text-center bg-red-700 border text-white  hover:bg-red-500 hover:text-gray-100 dark:text-gray-200 dark:bg-red-700 hidden lg:block">
              Create Account
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default navbar;
