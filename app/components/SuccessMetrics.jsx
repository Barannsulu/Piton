import React from "react";

function SuccessMetrics() {
  return (
    <div className="h-full bg-black flex justify-evenly items-center p-8 md:mb-36 flex-col md:flex-row">
      <div className="text-center mb-4">
        <p
          className="text-yellow-400
                    text-4xl
                    font-bold
                    font-['Manrope']"
        >
          350+
        </p>
        <p className="text-white">Clients Worldwide</p>
      </div>

      <div className="text-center mb-4">
        <p
          className="text-yellow-400
                    text-4xl
                    font-bold
                    font-['Manrope']"
        >
          20+
        </p>
        <p className="text-white">Team Members</p>
      </div>

      <div className="text-center mb-4">
        <p
          className="text-yellow-400
                    text-4xl
                    font-bold
                    font-['Manrope']"
        >
          100+
        </p>
        <p className="text-white">Projects Completed</p>
      </div>

      <div className="text-center mb-4">
        <p
          className="text-yellow-400
                    text-4xl
                    font-bold
                    font-['Manrope']"
        >
          85+
        </p>
        <p className="text-white">Revenue Greated</p>
      </div>
    </div>
  );
}

export default SuccessMetrics;
