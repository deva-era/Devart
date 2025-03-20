import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import About_intro from "./About/About_intro";
import About_footer from "./About/About_footer";
import Journey from "./About/Journey";

function About() {
  const [portrait_img, set_portrait_img] = useState([
    {
      id: 1,
      title: "Black custume couples",
      year: 2025,
      img: "0",
      price: 1999,
      type: "portrait",
      offer: 50,
      // sub: false,
    },
    {
      id: 2,
      title: "Harshini",
      year: 2024,
      img: "1",
      price: 1499,
      type: "portrait",
      offer: 10,
      // sub: false,
    },
    {
      id: 3,
      title: "ordering akka",
      year: 2025,
      img: "2",
      price: 2499,
      type: "portrait",
      offer: 30,
      // sub: false,
    },
    {
      id: 4,
      title: "alita-2020",
      year: 2020,
      img: "alita-2020",
      price: 2499,
      type: "portrait",
      offer: 30,
      sub: true,
    },

    // landscape
    // {
    //   id: 1,
    //   title: "landscape",
    //   year: 2025,
    //   img: "0",
    //   price: 2999,
    //   type: "landscape",
    //   offer: 5,
    // },
    // {
    //   id: 2,
    //   title: "landscape",
    //   year: 2025,
    //   img: "1",
    //   price: 1999,
    //   type: "landscape",
    //   offer: 20,
    // },
    // {
    //   id: 3,
    //   title: "landscape",
    //   year: 2025,
    //   img: "2",
    //   price: 2499,
    //   type: "landscape",
    //   offer: 45,
    // },
  ]);

  // crayons
  const [crayons_img, set_crayons_img] = useState([
    {
      id: 1,
      title: "crayons",
      year: 2025,
      img: "sun and moon island",
      price: 549,
      type: "crayons",
      offer: 3,
    },
    {
      id: 2,
      title: "crayons",
      year: 2025,
      img: "couple with umberlla",
      price: 599,
      type: "crayons",
      offer: 5,
    },
    {
      id: 3,
      title: "crayons",
      year: 2025,
      img: "flying island",
      price: 549,
      type: "crayons",
      offer: 15,
    },
    {
      id: 4,
      title: "crayons",
      year: 2025,
      img: "seasons",
      price: 549,
      type: "crayons",
      offer: 4,
    },
    {
      id: 5,
      title: "crayons",
      year: 2025,
      img: "sitting on sky night",
      price: 549,
      type: "crayons",
      offer: 10,
    },
    {
      id: 6,
      title: "crayons",
      year: 2025,
      img: "deer couple",
      price: 549,
      type: "crayons",
      offer: 2,
    },
  ]);
// ps
  const [ps_img, set_ps_img] = useState([
    {
      id: 1,
      title: "ps",
      year: 2025,
      img: "Avatar",
      price: 549,
      type: "ps",
      offer: 2,
    },
    {
      id: 2,
      title: "ps",
      year: 2025,
      img: "valhalla",
      price: 599,
      type: "ps",
      offer: 10,
    },
    {
      id: 3,
      title: "ps",
      year: 2025,
      img: "god of war",
      price: 549,
      type: "ps",
      offer: 7,
    },
    {
      id: 4,
      title: "ps",
      year: 2025,
      img: "H1Z1 blue",
      price: 599,
      type: "ps",
      offer: 25,
    },
    {
      id: 5,
      title: "ps",
      year: 2025,
      img: "angel dev",
      price: 549,
      type: "ps",
      offer: 50,
    },
    {
      id: 6,
      title: "ps",
      year: 2025,
      img: "Ravathana",
      price: 549,
      type: "ps",
      offer: 9,
    },
  ]);

  return (
    <>
      <section className="">
        <div className="w-screen h-screen  -z-30 inset-0 fixed  ">
          <img
            className="h-full w-full object-cover"
            src="./artshop/Background/mine.jpg"
            alt=""
          />
        </div>
        <About_intro />

        <section className="mb-10 mt-24 ">
          <div className="text-center mb-8 text-5xl font-semibold font-cinzel ">
            Journey{" "}
          </div>
          <div
            id="journey"
            className="grid grid-cols-3 gap-8 w-11/12 place-items-center mx-auto "
          >
            <Journey data={portrait_img} />
            <Journey data={crayons_img} />
            <Journey data={ps_img} />
          </div>
        </section>

        <About_footer />
      </section>
    </>
  );
}

export default About;
