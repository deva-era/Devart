import React from "react";
import Cart_setup from "./Cart_setup";
import { useState } from "react";
import Form from "./Art_elements/Form";
import Price from "./Art_elements/Price";
import Divider from "./Divider";
import { useEffect } from "react";

function Art_section() {
  // vertical
  const [portrait_img, set_portrait_img] = useState([
    {
      id: 1,
      title: "Fruit Shop",
      img: "0",
      price: 1999,
      type: "portrait",
      path: "./artshop/card images/",
    },
    {
      id: 2,
      title: "To-do List",
      img: "1",
      price: 1499,
      type: "portrait",
      path: "./artshop/card images/",
    },
    {
      id: 3,
      title: "Bus simulation System",
      img: "2",
      price: 2499,
      type: "portrait",
      path: "./artshop/card images/",
    },
  ]);

  // horizandal
  const [landscape_img, set_landscape_img] = useState([
    {
      id: 1,
      title: "Fruit Shop",
      img: "1",
      price: 2999,
      type: "landscape",
    },
    {
      id: 2,
      title: "To-do List",
      img: "2",
      price: 1999,
      type: "landscape",
    },
    {
      id: 3,
      title: "Bus simulation System",
      img: "3",
      price: 2499,
      type: "landscape",
    },
  ]);

  // crayons
  const [crayons_img, set_crayons_img] = useState([
    {
      id: 1,
      title: "crayons",
      img: "sun and moon island",
      price: 549,
      type: "crayons",
    },
    {
      id: 2,
      title: "crayons",
      img: "couple with umberlla",
      price: 599,
      type: "crayons",
    },
    {
      id: 3,
      title: "crayons",
      img: "flying island",
      price: 549,
      type: "crayons",
    },
    {
      id: 4,
      title: "crayons",
      img: "seasons",
      price: 549,
      type: "crayons",
    },
    {
      id: 5,
      title: "crayons",
      img: "sitting on sky night",
      price: 549,
      type: "crayons",
    },
    {
      id: 6,
      title: "crayons",
      img: "deer couple",
      price: 549,
      type: "crayons",
    },
  ]);

    const [ps_img, set_ps_img] = useState([
      {
        id: 1,
        title: "crayons",
        img: "Avatar",
        price: 549,
        type: "ps",
      },
      {
        id: 2,
        title: "crayons",
        img: "valhalla",
        price: 599,
        type: "ps",
      },
      {
        id: 3,
        title: "crayons",
        img: "god of war",
        price: 549,
        type: "ps",
      },
      {
        id: 4,
        title: "crayons",
        img: "H1Z1 blue",
        price: 549,
        type: "ps",
      },
      {
        id: 5,
        title: "crayons",
        img: "angel dev",
        price: 549,
        type: "ps",
      },
      {
        id: 6,
        title: "crayons",
        img: "Ravathana",
        price: 549,
        type: "ps",
      },
    ]);

// scrolling

 const [isScrollLocked, setIsScrollLocked] = useState(false);

 useEffect(() => {
   if (isScrollLocked) {
     document.body.style.overflow = "hidden"; // Disable scrolling
   } else {
     document.body.style.overflow = "auto"; // Enable scrolling
   }

   return () => {
     document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled when unmounting
   };
 }, [isScrollLocked]);


  // image click
  // const [isopen, setisopen] = useState(false);
  const [open_img, set_open_img] = useState({
    img: null,
    open: false,
    type: null,
  });

  const [click_order, set_click_order] = useState(false);
  const [click_price, set_click_price] = useState(false);
  //
  
  // imageclick
  const handleImageClick = (imageData) => {
    set_open_img(imageData);
    setIsScrollLocked(true)
  };

  // order
  const handleOrderClick = (order) => {
    set_click_order(order);
  };

  // price
  const handlePriceClick = (price) => {
    set_click_price(price);
  };

  // image zooming
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
          class=" text-4xl mr-52 mt-4 cursor-pointer absolute z-10 right-0 top-0"
          onClick={() => {
            set_open_img({ img: null, open: false });
            setScale(1);
            setIsScrollLocked(false);
          }}
        >
          &times;
        </span>

        <img
          src={`/artshop/card images/${open_img.type}/${open_img.img}.jpg `}
          className="object-contain w-5/12 h-5/6 mx-auto transition-transform duration-300 mt-20"
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
          {portrait_img.map((data) => {
            return (
              <Cart_setup
                key={data.id}
                datas={data}
                onImageClick={handleImageClick}
                handleOrderClick={handleOrderClick}
              />
            );
          })}
        </section>

        {/* landscape */}
        <div>
          <Divider divider_name="LANDSCAPE" />
        </div>
        <section className="place-items-center grid w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto mb-10  py-10 ">
          {landscape_img.map((data) => {
            return (
              <Cart_setup
                key={data.id}
                datas={data}
                onImageClick={handleImageClick}
                handleOrderClick={handleOrderClick}
              />
            );
          })}
        </section>

        {/* Cryons */}
        <div>
          <Divider divider_name="CRAYONS" />
        </div>
        <section className="place-items-center grid w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto mb-10  py-10 ">
          {crayons_img.map((data) => {
            return (
              <Cart_setup
                key={data.id}
                datas={data}
                onImageClick={handleImageClick}
                handleOrderClick={handleOrderClick}
              />
            );
          })}
        </section>

        {/* Photoshop */}
        <div>
          <Divider divider_name="PHOTOSHOP" />
        </div>
        <section className="place-items-center grid w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto mb-10  py-10 ">
          {ps_img.map((data) => {
            return (
              <Cart_setup
                key={data.id}
                datas={data}
                onImageClick={handleImageClick}
                handleOrderClick={handleOrderClick}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Art_section;
