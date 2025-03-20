import React from "react";
import { useState } from "react";
import Experience from "./Experience";

function Intro_info({ data }) {
  const [pencil_data, set_pencil_data] = useState([
    { id: 1, no: 100, name: "Projects" },
    { id: 2, no: 10, name: "Years" },
  ]);

  const [crayons_data, set_crayons_data] = useState([
    { id: 1, no: 25, name: "Projects" },
    { id: 2, no: 3, name: "Years" },
  ]);

  const [ps_data, set_ps_data] = useState([
    { id: 1, no: 10, name: "Projects" },
    { id: 2, no: 3, name: "Years" },
  ]);

  return (
    <section id="intro_info" className="flex flex-col gap-40 max-sm:gap-10">
      {/* pencil */}
      <div className="flex justify-around w-11/12 mx-auto max-md:flex-col gap-4 max-md:h-auto  max-xl:home_section_height ">
        <div className="max-md:flex max-md:flex-col">
          <div className="">
            <span className="font-cinzel font-bold text-5xl ">Pencil</span>
            <span>&nbsp;-"Where Graphite Tells a Story"</span>
          </div>
          <p className="w-3/4 mt-1 ">
            &nbsp;Every stroke, every shade, and every fine detail—pencil art
            captures emotions in a way that no other medium can. Here, we
            celebrate the raw beauty of realism, bringing life to paper with
            nothing but graphite and creativity. From delicate portraits to
            intricate landscapes, each piece is a testament to patience,
            passion, and the timeless elegance of pencil work. Explore, get
            inspired, and witness the magic of art in its purest form.
          </p>
          <div className="grid grid-cols-3  lg:-space-x-20">
            {pencil_data.map((data) => {
              return <Experience key={data.id} card={data} />;
            })}
          </div>
        </div>
        {/* img */}
        <div className="">
          <img
            className="images border"
            src="./artshop/elements/Pencil.webp"
            alt=""
          />
        </div>
      </div>

      {/* Crayons info */}
      <div className="flex justify-around w-11/12 mx-auto max-md:flex-col gap-10 max-md:h-auto  max-xl:home_section_height">
        <div className="order-2 w-5/5  max-sm:order-1">
          <div className="">
            <span className="font-cinzel font-bold text-5xl ">Crayons</span>
            <span>&nbsp;-"A World of Color in Every Stroke"</span>
          </div>
          <p className="mt-1 w-full">
            &nbsp;Crayons aren't just for childhood—they’re a tool for boundless
            creativity! Here, vibrant colors blend, layer, and come to life,
            transforming simple wax into breathtaking works of art. From bold,
            textured portraits to dreamy, soft landscapes, every piece tells a
            story filled with warmth, nostalgia, and imagination. Step into a
            world where colors speak louder than words—explore, create, and get
            inspired!
          </p>
          <div className="grid grid-cols-3 lg:-space-x-10">
            {crayons_data.map((data) => {
              return <Experience key={data.id} card={data} />;
            })}
          </div>
        </div>
        <div className="order-0 max-sm:order-1 max-sm:mt-9">
          <img
            className="images border"
            src="./artshop/elements/homecrayons.webp"
            alt="homecrayons.webp"
          />
        </div>
      </div>

      {/* Photoshop */}
      <div
        // style={{ height: 373.66 }}
        className="flex justify-around w-11/12 mx-auto max-md:flex-col gap-4 max-md:h-auto  mb-5 max-xl:home_section_height"
      >
        <div className="">
          <div className="">
            <span className="font-cinzel font-bold text-5xl ">Photo</span>
            <span className=" text-5xl text-cyan-500 ">Shop</span>
            <span>&nbsp;-"Where Imagination Meets Reality"</span>
          </div>
          <p className="w-3/4 mt-1 ">
            &nbsp;In the world of Photoshop, reality is just the beginning.
            Here, creative manipulation transforms ordinary images into
            extraordinary visions—seamlessly blending fantasy with realism. From
            surreal dreamscapes to lifelike digital illusions, every piece is
            crafted with precision, depth, and artistic storytelling. Step into
            a realm where the impossible becomes possible—explore, create, and
            be inspired!
          </p>
          <div className="grid grid-cols-3  lg:-space-x-20 ">
            {ps_data.map((data) => {
              return <Experience key={data.id} card={data} />;
            })}
          </div>
        </div>
        <span className="">
          <img
            className="images border"
            src="./artshop/elements/photoshop.webp"
            alt=""
          />
        </span>
      </div>
    </section>
  );
}

export default Intro_info;
