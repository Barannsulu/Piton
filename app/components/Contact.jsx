import React from "react";

function Contact() {
  return (
    <div className="sm:flex p-12">
      <div className="bg p-4 w-1/2 h-auto flex justify-center items-center mr-20 hidden sm:flex">
        <img src="/images/contact.png" alt="" />
      </div>
      <div className="sm:w-1/2 p-4 flex flex-col relative text-center">
        <h2 className="text-3xl font-bold mb-8 text-right">
          We'd love to hear <br /> <p className="text-right">from you</p>
        </h2>
        <div className="mb-4">
          <input
            type="text"
            id="input1"
            name="input1"
            className="mt-1 p-4 border x w-full  placeholder-black"
            placeholder="Name*"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="input2"
            name="input2"
            className="mt-1 p-4 border  w-full placeholder-black"
            placeholder="Email*"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="input3"
            name="input3"
            className="mt-1 p-4 border w-full placeholder-black"
            placeholder="Website URL*"
          />
        </div>

        <div className="mb-4">
          <textarea
            type="text"
            id="input4"
            name="input4"
            className="mt-1 p-4 border w-full h-[200px] resize-none placeholder-black"
            placeholder="Project Details"
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-black text-white p-2 w-full ">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
