import React from "react";
import Cart_setup from "./Cart_setup";
import { useState } from "react";
import Form from "./Art_elements/Form";
import Price from "./Art_elements/Price";
import Divider from "./Divider";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Art_section() {
  const [ver_img, set_ver_img] = useState([
    {
      id: 1,
      title: "Fruit Shop",
      img: "0",
      price: 1999,
      type: "ver",
    },
    {
      id: 2,
      title: "To-do List",
      img: "1",
      price: 1499,
      type: "ver",
    },
    {
      id: 3,
      title: "Bus simulation System",
      img: "2",
      price: 2499,
      type: "ver",
    },
  ]);

  const [hor_img, set_hor_img] = useState([
    {
      id: 1,
      title: "Fruit Shop",
      img: "1",
      price: 2999,
      type: "hor",
    },
    {
      id: 2,
      title: "To-do List",
      img: "2",
      price: 1999,
      type: "hor",
    },
    {
      id: 3,
      title: "Bus simulation System",
      img: "3",
      price: 2499,
      type: "hor",
    },
  ]);

  // image click
  // const [isopen, setisopen] = useState(false);
  const [open_img, set_open_img] = useState({
    img: null,
    open: false,
    type: null,
  });

  const [click_order, set_click_order] = useState(true);
  const [click_price, set_click_price] = useState(false);
  //
  // imageclick
  const handleImageClick = (imageData) => {
    set_open_img(imageData);
  };
  // order
  const handleOrderClick = (order) => {
    set_click_order(order);
  };
  // price
  const handlePriceClick = (price) => {
    set_click_price(price);
  };


  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prevScale) => {
      let newScale = prevScale + (e.deltaY > 0 ? -0.1 : 0.1);
      return Math.min(Math.max(newScale, 1), 3); // Limit zoom between 1x and 3x
    });
  };

  //
  return (
    <section className="relative w-full h-full   ">
      {/* image click */}
      <div
        onWheel={handleWheel}
        id="viewclick"
        className={`${
          open_img.open ? "block" : "hidden"
        } z-10  backdrop-blur-sm fixed inset-0 w-full h-full bg-black/55 `}
      >
        <span
          class=" text-4xl flex justify-end mr-52 mt-4 cursor-pointer "
          onClick={() =>{ set_open_img({ img: null, open: false });setScale(1);}}
        >
          &times;
        </span>

        <img
          src={`/artshop/card images${
            open_img.type == "hor" ? "/horizan" : ""
          }/${open_img.img}.jpg `}
          className="object-contain w-5/12 h-5/6 mx-auto transition-transform duration-300"
          style={{ transform: `scale(${scale})` }}
          alt="closed"
        />
      </div>

      {/*  */}

      {/* Price order */}
      <div
        id="viewclick"
        className={`${
          click_price ? "block" : "hidden"
        } z-10  backdrop-blur-sm fixed inset-0 w-full h-full bg-black/55 `}
      >
        <Price handlePriceClick={handlePriceClick} />
      </div>

      {/*  */}

      {/* Order click */}
      <div
        id="viewclick"
        className={`${
          click_order ? "block" : "hidden"
        } z-10  backdrop-blur-sm fixed inset-0 w-full h-full bg-black/55 `}
      >
        <Form handleOrderClick={handleOrderClick} />{" "}
      </div>
      {/*  */}
      {/* price */}

      {/* button */}
      <div className="z-0">
        <div className="flex gap-10 justify-end w-10/12 mx-auto mt-8 max-md:flex-col">
          <button
            className="button_setup "
            onClick={() => handleOrderClick(true)}
          >
            Place Order
          </button>
          <button
            className="button_setup"
            onClick={() => handlePriceClick(true)}
          >
            Price Details
          </button>
        </div>
        {/*  */}

        {/* portrait */}
        <div className="mt-10">
          <Divider divider_name="PORTRAIT" />
        </div>
        <section className="place-items-center grid w-11/12 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16 mx-auto mb-10 py-10 ">
          {ver_img.map((data) => {
            return (
              <Cart_setup
                key={data.id}
                datas={data}
                onImageClick={handleImageClick}
              />
            );
          })}
        </section>

        {/* landscape */}
        <div>
          <Divider divider_name="LANDSCAPE" />
        </div>
        <section className="grid w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto mb-10  py-10 ">
          {hor_img.map((data) => {
            return (
              <Cart_setup
                key={data.id}
                datas={data}
                onImageClick={handleImageClick}
              />
            );
          })}
        </section>

        {/* Cryons */}
        <div>
          <Divider divider_name="CRAYONS" />
        </div>
      </div>
    </section>
  );
}

export default Art_section;
