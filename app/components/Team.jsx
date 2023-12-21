import React from "react";
import TeamMember from "./TeamMember";
function Team() {
  return (
    <div className="bg-white  mb-36">
      <p className=" text-center md:text-[44px] font-bold font-['Manrope'] justify-center items-center text-[24px]">
        Meet the heroes behind the magic
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <TeamMember
          imgUrl="/images/founder.png"
          title="Founder"
          name="Esther Howard"
        />
        <TeamMember
          imgUrl="/images/developer.png"
          title="Developer"
          name="Cody Fisher"
        />
        <TeamMember
          imgUrl="/images/designer.png"
          title="Designer"
          name="Brooklyn Simmons"
        />
      </div>
    </div>
  );
}

export default Team;
