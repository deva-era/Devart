import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import About_intro from "./About/About_intro";
import About_footer from "./About/About_footer";
function About() {
  const [ver_img, set_ver_img] = useState([
    {
      id: 1,
      title: "Sharmi himalaya frds",
      img: "0",
      price: 1999,
      year: 2024,
    },
    {
      id: 2,
      title: "Harshini",
      img: "1",
      price: 1499,
      year: 2024,
    },
    {
      id: 3,
      title: "Darkdress 3 family ",
      img: "2",
      year: 2024,
    },
  ]);


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
  // console.log(16%2);
  function left() {
    if (slide_img <= 0) {
      set_slide_img(ver_img.length - 1);
    } else {
      set_slide_img((data) => data - 1);
    }
  }

  return (
    <>
      <div
        id="viewclick"
        className={` -z-30  backdrop-blur-none fixed inset-0 w-full h-full home-page `}
      ></div>
      <section className="">
        <About_intro />

        <section className="mb-10 mt-24 ">
          <div className="text-center mb-8 text-5xl font-semibold font-cinzel ">
            Journey{" "}
          </div>
          <aside>
            <div
              style={{ height: 350, width: 400 }}
              className="relative bg-white mx-auto rounded-lg"
            >
              <div
                className="text-black text-3xl absolute bottom-2/4 -left-14  cursor-pointer header_menu"
                onClick={left}
              >
                {" "}
                <AiOutlineDoubleLeft />
              </div>
              <div
                className="text-black text-3xl absolute -right-14 bottom-2/4 cursor-pointer header_menu"
                onClick={right}
              >
                <AiOutlineDoubleRight />
              </div>

              <img
                src={`./artshop/card images/${slide_img}.jpg `}
                alt=""
                className="object-cover w-full h-full rounded-lg overflow-hidden"
                style={{ transition: "transform 1s ease-in-out" }}
              />
              <span className="flex justify-center mt-3">{ver_img[slide_img].year}</span>
            </div>
          </aside>
        </section>
        <About_footer />
      </section>
    </>
  );
}

export default About;
