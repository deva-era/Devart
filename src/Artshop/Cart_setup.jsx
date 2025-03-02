import React from "react";


function Cart_setup({ datas, onImageClick }) {
  // vertical images
  if (datas.type == "ver") {
    return (
      <div
        style={{ height: 400, width: 345 }}
        className="  w-96 backdrop-blur-3xl border flex-col hover:scale-105 duration-150 items-start rounded-sm "
      >
        <img
          src={`./artshop/card images/${datas.img}.jpg `}
          alt={`${datas.title}`}
          className="w-11/12 mx-auto p-2  object-contain hover:cursor-pointer"
          style={{ height: 350 }}
          onClick={() =>
            onImageClick({ img: datas.img, open: true, type: "ver" })
          }
        />

        <span className="flex flex-col items-center mt-1">₹{datas.price}</span>
      </div>
    );
  }
  // Horizandal images
  else if (datas.type == "hor") {
    return (
      <div
        style={{ height: 400, width: 345 }}
        className=" w-96  backdrop-blur-lg border flex-col hover:scale-105 duration-150  rounded-sm "
      >
        <img
          src={`./artshop/card images/horizan/${datas.img}.jpg `}
          alt=""
          className="w-full p-2  object-cover hover:cursor-pointer"
          style={{ height: 350 }}
          onClick={() =>
            onImageClick({ img: datas.img, open: true, type: "hor" })
          }
        />
        <span className="flex flex-col items-center mt-1">₹{datas.price}</span>
      </div>
    );
  }
}

export default Cart_setup;
