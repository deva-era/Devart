import React from "react";
import Cart_setup from "./Cart_setup";
import { useState, createContext, useEffect } from "react";
import Form from "./Art_elements/Form";
import Price from "./Art_elements/Price";
import Divider from "./Divider";
import Ordered_animation from "./Art_elements/Ordered_animation";

export const Buydatas=createContext();

function Art_section() {
  // vertical
  const [portrait_img, set_portrait_img] = useState([
    {
      id: 1,
      title: "portrait",
      img: "0",
      price: 2499,
      type: "portrait",
      offer: 50,
    },
    {
      id: 2,
      title: "portrait",
      img: "1",
      price: 1499,
      type: "portrait",
      offer: 10,
    },
    {
      id: 3,
      title: "portrait",
      img: "2",
      price: 1999,
      type: "portrait",
      offer: 30,
    },
  ]);

  // horizandal
  const [landscape_img, set_landscape_img] = useState([
    {
      id: 1,
      title: "landscape",
      img: "0",
      price: 2999,
      type: "landscape",
      offer: 5,
    },
    {
      id: 2,
      title: "landscape",
      img: "1",
      price: 1999,
      type: "landscape",
      offer: 20,
    },
    {
      id: 3,
      title: "landscape",
      img: "2",
      price: 2499,
      type: "landscape",
      offer: 45,
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
      offer: 3,
    },
    {
      id: 2,
      title: "crayons",
      img: "couple with umberlla",
      price: 599,
      type: "crayons",
      offer: 5,
    },
    {
      id: 3,
      title: "crayons",
      img: "flying island",
      price: 549,
      type: "crayons",
      offer: 15,
    },
    {
      id: 4,
      title: "crayons",
      img: "seasons",
      price: 549,
      type: "crayons",
      offer: 4,
    },
    {
      id: 5,
      title: "crayons",
      img: "sitting on sky night",
      price: 549,
      type: "crayons",
      offer: 10,
    },
    {
      id: 6,
      title: "crayons",
      img: "deer couple",
      price: 549,
      type: "crayons",
      offer: 2,
    },
  ]);

  const [ps_img, set_ps_img] = useState([
    {
      id: 1,
      title: "ps",
      img: "Avatar",
      price: 549,
      type: "ps",
      offer: 2,
    },
    {
      id: 2,
      title: "ps",
      img: "valhalla",
      price: 599,
      type: "ps",
      offer: 10,
    },
    {
      id: 3,
      title: "ps",
      img: "god of war",
      price: 549,
      type: "ps",
      offer: 7,
    },
    {
      id: 4,
      title: "ps",
      img: "H1Z1 blue",
      price: 599,
      type: "ps",
      offer: 25,
    },
    {
      id: 5,
      title: "ps",
      img: "angel dev",
      price: 549,
      type: "ps",
      offer: 50,
    },
    {
      id: 6,
      title: "ps",
      img: "Ravathana",
      price: 549,
      type: "ps",
      offer: 9,
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

  function scrollchange() {
    setIsScrollLocked(false);
  }

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
    setIsScrollLocked(true);
  };

  // order
  const handleOrderClick = (order) => {
    set_click_order(order);
    if (order){
      setIsScrollLocked(true);
    }else{
      setIsScrollLocked(false);
    }
  };

  //image type sent to confirm page
  const [Buydata, set_Buydata] = useState(null);
  const handleBuyData = (data) => {
    set_Buydata(data);
  };

  useEffect(() => {
    console.log(Buydata);
  }, [Buydata]);

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

  // coofirmed order congradulation
  const [congrates, set_congrates] = useState(false);
  const handle_congrates = (status) => {
    set_congrates(status);
    setTimeout(() => {
      // set_congrates(false);
    }, 2000);
  };

  useEffect(() => {
    if (congrates) {
      setIsScrollLocked(true);
    } else {
      setIsScrollLocked(false);
    }
  }, [congrates]);
  //
  return (
    <>
      <section className="relative w-full h-full   ">
        {/* animation congrates */}
        <div
          onWheel={handleWheel}
          id="viewclick"
          className={`${
            congrates ? "block" : "hidden"
          } z-10  backdrop-blur-sm fixed inset-0 w-screen h-screen  bg-black/55 flex justify-center items-center`}
        >
          {congrates && (
            <Ordered_animation handle_congrates={handle_congrates} />
          )}
        </div>

        {/* image click */}
        <div
          onWheel={handleWheel}
          id="viewclick"
          className={`${
            open_img.open ? "block" : "hidden"
          } z-10  backdrop-blur-sm fixed inset-0 w-full h-full bg-black/55 transition-opacity`}
        >
          <span
            class=" text-4xl cursor-pointer absolute z-10 right-5 top-1"
            onClick={() => {
              set_open_img({ img: null, open: false });
              setScale(1);
              setIsScrollLocked(false);
            }}
          >
            &times;
          </span>

          <img
            src={`./artshop/card images/${open_img.type}/${open_img.img}.jpg `}
            className="object-contain w-5/12 h-5/6 mx-auto transition-transform duration-300 mt-14"
            style={{ transform: `scale(${scale})` }}
            alt="closed"
          />
        </div>

        {/*  */}

        {/* Price  */}
        <div
          id="viewclick"
          className={`${
            click_price ? "block" : "hidden"
          } z-10  backdrop-blur-sm fixed inset-0 w-full h-full bg-black/55 `}
        >
          <Price
            handlePriceClick={handlePriceClick}
            scrollchange={scrollchange}
          />
        </div>

        {/*  */}

        {/* Order click and form open*/}
        <div
          id="viewclick"
          className={`${
            click_order ? "block" : "hidden"
          } z-10  backdrop-blur-sm fixed inset-0 w-full h-full bg-black/55 `}
        >
          <Buydatas.Provider value={Buydata}>
            <Form
              handleOrderClick={handleOrderClick}
              handle_congrates={handle_congrates}
            />
          </Buydatas.Provider>
        </div>

        {/* price */}

        {/* button */}
        <div className="z-0">
          <div className="flex gap-10 justify-end w-10/12 mx-auto mt-8 max-md:flex-col">
            <button
              className="button_setup"
              onClick={() => {
                handlePriceClick(true);
                setIsScrollLocked(true);
              }}
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
                  handleBuyData={handleBuyData}
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
                  handleBuyData={handleBuyData}
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
                  handleBuyData={handleBuyData}
                />
              );
            })}
          </section>

          {/* Photoshop */}
          <div>
            <Divider divider_name="PHOTOSHOP" />
          </div>
          <section className="place-items-center grid w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto mb-10  py-10 ">
            {ps_img.map((data, index) => {
              return (
                <Cart_setup
                  key={index}
                  datas={data}
                  onImageClick={handleImageClick}
                  handleOrderClick={handleOrderClick}
                  handleBuyData={handleBuyData}
                />
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}

export default Art_section;
