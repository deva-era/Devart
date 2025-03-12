import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

function Journey({ data }) {
   const ver_img=data;

    const [slide_img, set_slide_img] = useState(0);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // Effect to change the image every 3 seconds (3000ms)
    useEffect(() => {
      const interval = setInterval(() => {
        set_slide_img((prevIndex) => (prevIndex + 1) % ver_img.length);
      }, 3000); // 3000ms for 3 seconds

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);

    function right() {
      if (slide_img >= ver_img.length - 1) {
        set_slide_img(0);
      } else {
        set_slide_img((data) => data + 1);
      }
    }
    console.log(ver_img);
    function left() {
      if (slide_img <= 0) {
        set_slide_img(ver_img.length - 1);
      } else {
        set_slide_img((data) => data - 1);
      }
    }
  return (
    <aside className="mb-">
      <div
        style={{ height: 350, width: 400 }}
        className="relative bg-white mx-auto rounded-lg"
      >
        <div
          className="text-black/15 text-xl absolute bottom-2/4 left-2  cursor-pointer header_menu"
          onClick={left}
        >
          {" "}
          <AiOutlineDoubleLeft />
        </div>
        <div
          className="text-black/15 text-xl absolute right-2 bottom-2/4 cursor-pointer header_menu"
          onClick={right}
        >
          <AiOutlineDoubleRight />
        </div>

        <img
          src={`./artshop/card images/${ver_img[slide_img].type}/${ver_img[slide_img].img}.jpg `}
          alt=""
          className="object-cover w-full h-full rounded-lg overflow-hidden"
          style={{ transition: "transform 1s ease-in-out" }}
        />
        <span className="flex justify-center mt-3">
          {ver_img[slide_img].year}
        </span>
      </div>
    </aside>
  );
}
export default Journey;
