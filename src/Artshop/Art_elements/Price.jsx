import React from "react";

function Price({ handlePriceClick }) {
  return (
    <section>
      <div className="">
        <span
          class=" text-4xl flex justify-end mr-52 mt-4 cursor-pointer max-md:relative max-md:left-24"
          onClick={() => handlePriceClick(false)}
        >
          &times;
        </span>

        <div
          style={{ height: 550 }}
          className="max-md:mt-4 mx-auto bg-white rounded-xl w-fit shadow-2xl shadow-teal-400/50"
        >
          <img
            src="./artshop/pricecard/price1.jpg"
            className="object-contain w-full h-full p-1 rounded-xl"
            alt="Price details"
          />
        </div>
      </div>
    </section>
  );
}

export default Price;
