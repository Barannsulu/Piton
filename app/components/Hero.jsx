import React from "react";
import Hand from "./Hand";
function Hero() {
  return (
    <div className="header flex relative justify-center items-center h-96 w-full text-black overflow-hidden ">
      <h1
        className="text-stone-950
            text-center
            sm:text-[40px]
            text-[32px]
            font-bold
            font-['Manrope']
            absolute
            z-40
            "
      >
        Let’s create something <br />
        great together.
      </h1>
      <div className="w-[1834.63px] h-[970.91px] justify-center items-center inline-flex">
        <img
          className="w-[513px] h-[669.14px] origin-top-left -rotate-3 rounded-[36px]"
          src="/images/shape_1.png"
        />
        <img
          className="w-[1286.76px] h-[970.91px] rounded-[176px]"
          src="/images/shape_2.png"
        />
      </div>

      <div className="flex absolute justify-center top-48">
        <Hand imgUrl="/images/hand1.png" customClassName="hidden md:block" />
        <Hand imgUrl="/images/hand2.png" customClassName="hidden sm:block" />
        <Hand imgUrl="/images/hand3.png" />
        <Hand imgUrl="/images/hand4.png" />
        <Hand imgUrl="/images/hand5.png" customClassName="hidden sm:block" />
        <Hand imgUrl="/images/hand6.png" customClassName="hidden md:block" />
      </div>
    </div>
  );
}

export default Hero;
