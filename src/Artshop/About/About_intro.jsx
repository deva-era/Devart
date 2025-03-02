import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function About_intro() {
  return (
    <section
      id="intro"
      className=" flex md:justify-around items-center gap-1
      max-md:flex-col  max-md:space-y-9  p-5 mb-20 w-11/12 mx-auto "
    >
      {/* details */}
      <div className="flex flex-col max-md:gap-y-1 text-4xl w-11/12 text-white  max-md:order-2 max-md:mt-20 flex-wrap">
        <div className="flex flex-col">
          <span className="font-bold">
            Hi,it's
            <span
              style={{ color: "#0ff" }}
              className="text-5xl blue_footer_shadow "
            >
              {" "}
              Devanathan
            </span>
          </span>
          <span className=" font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500 to-65%">
            I'm an Artist
          </span>
          <span className="font-thin text-lg w-12/12 backdrop-blur-sm rounded-2xl p-4">
            Welcome to my world of creativity! I am a self-made artist with over
            10 years of experience in graphite pencil art, crayons, and
            Photoshop manipulation. Born and raised in Tamil Nadu, my passion
            for art started at a young age, and over the years, I have
            successfully completed numerous commissions for clients worldwide.
            <br />
            From hyper-realistic pencil sketches to vivid crayon masterpieces
            and stunning digital manipulations, my work is a blend of
            imagination, precision, and artistic expression. Every artwork I
            create is infused with dedication, emotion, and a unique personal
            touch.
            <br /> Explore my portfolio and bring your ideas to life through my
            art! <br />
            📩 For commissions and inquiries, feel free to contact me.
          </span>
        </div>

        {/* icons */}
        <div className="flex gap-x-4 mt-2 text-lg ">
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a
              className="header_menu"
              href="https://github.com/deva-era"
              target="_blank"
            >
              {" "}
              <FaGithub />{" "}
            </a>
          </span>
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a
              href="http://www.linkedin.com/in/devanathan-v-4a811931b"
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </a>
          </span>
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a
              href="https://www.instagram.com/devtheart_?igsh=MXZqYm1pa3pzZGkxNw=="
              target="_blank"
            >
              {" "}
              <FaInstagram />
            </a>
          </span>
        </div>

        <div>
          <button className=" button_setup">
            <a
              href="https://docs.google.com/document/d/1le8G_W3MVJV8MpD0xbK1RndpjGC-ZEWg29vZ-IVeEas/export?format=pdf"
              download="Resume.pdf"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      <div className=" relative h-fit  mt-2 w-fit">
        <img
          className="object-contain"
          style={{ height: 380, width: 575 }}
          src="./public/artshop/about/test2.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default About_intro;
