import React from "react";

function Experience({ card }) {
  return (
    <div className="flex overflow-hidden mt-4 flex-wrap flex-col items-start font-semibold bg-black/50 justify-center p-2 w-4/12 hover:shadow-xl hover:shadow-black/40 max-lg:w-1/5">
      <div className="flex items-center ">
        <span className="text-3xl " style={{ color: "cyan" }}>
          {card.no}
        </span>
        <span className="text-2xl ">+</span>
      </div>
      <div>
        <span>{card.name}</span>
      </div>
    </div>
  );
}

export default Experience;
