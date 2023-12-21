import React from "react";

function Into() {
  return (
    <div className="bg-white p-16 justify-center items-center ">
      <div className="text-stone-950 text-[32px] font-bold font-['Manrope']">
        Who we are
      </div>
      <div
        className="text-stone-950
        sm:mb-8
        text-xl
        sm:text-2xl
        font-['Manrope']
        "
      >
        We love what we do and create partnerships with our clients to ensure
        their digital transformation is positioned for long-term success.We
        believe that the human dimensions essential to start any successful
        project and that this is where splendid emotional relationships between
        the company and people are born.
      </div>

      <img
        className="w-full h-auto hidden sm:flex"
        src="/images/mid-image.png"
      />
    </div>
  );
}

export default Into;
