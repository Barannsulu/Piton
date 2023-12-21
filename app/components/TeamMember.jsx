import React from "react";

function TeamMember({ imgUrl, name, title }) {
  return (
    <div className="p-4 bg-white shadow mr-4 mt-4">
      <img className="h-[200px] " src={imgUrl} alt="" />
      <p
        className="text-stone-950
                        text-[20px]
                        font-bold
                        font-['Manrope']"
      >
        {name}
      </p>
      <p
        className="text-stone-950
                        font-medium
                        font-['Manrope'] 
                        opacity-50"
      >
        {title}
      </p>
    </div>
  );
}

export default TeamMember;
