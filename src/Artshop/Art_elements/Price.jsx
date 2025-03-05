import React from "react";

function Price({ handlePriceClick, scrollchange }) {
  return (
    <section>
      <div className="">
        <span
          class=" text-4xl right-8 top-2 cursor-pointer absolute"
          onClick={() => {
            handlePriceClick(false);
            scrollchange();
          }}
        >
          &times;
        </span>

        <div
          style={{ height: 550 }}
          className="mt-14 mx-auto bg-white rounded-xl w-fit shadow-2xl shadow-teal-400/50"
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
