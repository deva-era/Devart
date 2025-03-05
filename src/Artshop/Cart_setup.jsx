import React from "react";
function Cart_setup({ datas, onImageClick, handleOrderClick }) {
  function CalTotalAmount(Discounted_Price, Discounted_Percentage) {
    let Original_Price = Math.floor(
      Discounted_Price / (1 - Discounted_Percentage / 100)
    );

    let remainder = Original_Price % 10;
    if (remainder <= 5) {
      return Original_Price - remainder - 1; // Round down to the nearest 9
    } else {
      return Original_Price - remainder + 9; // Round up to the nearest 9
    }
    return Original_Price;
  }

  return (
    <div className="backdrop-blur-md border-slate-50/10 border flex-col hover:scale-105 duration-150 items-start rounded-2xl overflow-hidden h-fit card_width ">
      <img
        src={`./artshop/card images/${datas.type}/${datas.img}.jpg `}
        alt={`${datas.title}`}
        className="w-full px-2 mx-auto pt-2 object-contain hover:cursor-pointer card_image_height"
        onClick={() =>
          onImageClick({ img: datas.img, open: true, type: datas.type })
        }
      />
      <div className="bg-amber-100 h-full flex flex-col items-center">
        <div className="flex gap-1 items-center mt-2">
          <span className="text-amber-100 inline-block bg-red-600 rounded-md h-fit px-4">
            {datas.offer}%
          </span>
          <div className="space-x-0.5">
            <small className=" text-slate-900 font-extralight relative bottom-1.5 text-sm">
              ₹
            </small>
            <span className=" text-slate-900 font-medium text-2xl ">
              {datas.price}
            </span>
          </div>
          <div>
            <small className="text-slate-500">
              M.R.P:
              <s className="ml-1">
                ₹{CalTotalAmount(datas.price, datas.offer)}
              </s>
            </small>
          </div>
        </div>
        <div>
          <button
            className="text-white bg-orange-400 w-32 rounded-full my-1.5 hover:bg-orange-600"
            onClick={() => handleOrderClick(true)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_setup;
