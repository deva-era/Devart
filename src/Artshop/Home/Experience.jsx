import React from "react";

function Experience({ card }) {
  return (
    <div className="overflow-hidden mt-4  font-semibold bg-black/50 justify-center p-2 w-24 hover:shadow-xl hover:shadow-black/40">
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
