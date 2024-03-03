import React from "react";

function herosection() {
  return (
    <>
      <div className="flex flex-row m-5 h-80 space-x-1 text-center">
        <div className="bg-hero-image1 bg-cover w-8/12 h-auto text-lime-50 flex flex-col items-center space-y-10">
        <span className="text-xl text-white mt-20 w-60">
              <strong className="text-5xl font-serif">Trending Now</strong> in our store
            </span>
            <button className="bg-red-500 opacity-80 text-lime-50 p-2.5 ">
              Learn More
            </button>
        </div>

        <div className="bg-red-50 w-1/3 h-auto flex flex-col space-y-1">

          <div className="h-40 bg-hero-image2 bg-cover flex flex-col items-center space-y-2">
            <span className="text-xl text-white mt-4 w-60">
              <strong>Check Out</strong> our recomended products
            </span>
            <button className="bg-black opacity-80 text-lime-50 p-2.5 ">
              Learn More
            </button>
          </div>

          <div className="h-40 bg-hero-image3 bg-cover flex flex-col items-center space-y-2">
          <span className="text-xl text-white mt-4 w-60">
              <strong>Latest</strong> product line up
            </span>
            <button className="bg-black opacity-80 text-lime-50 p-2.5 ">
              Learn More
            </button>
          </div>

        </div>

      </div>
    </>
  );
}

export default herosection;
