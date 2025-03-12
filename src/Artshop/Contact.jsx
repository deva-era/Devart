import React from 'react'
import Footer_resuse from './Footer_resuse';
function Contact() {
  return (
    <>
      <div
        id="viewclick"
        className={` -z-30  backdrop-blur-none fixed inset-0 w-full h-full home-page `}
      ></div>
      <section className=" ">
        <form
          id="contact"
          class="  bg-transparent backdrop-blur-sm p-5 rounded-md"
          method="get"
        >
          <div className="flex flex-col w-full ">
            <div
              className="mb-6 text-3xl font-light text-center text-gray-800 blue_footer_shadow"
              style={{ color: "cyan" }}
            >
              Contact me !
            </div>
            <div className=" grid grid-cols-2 gap-x-5 max-md:grid-cols-1 max-md:px-20">
              <div className="grid gap-y-5">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" ">
                    <input
                      type="text"
                      id="contact-form-name"
                      class=" rounded-lg flex-1 appearance-none  bg-transparent    text-white placeholder-gray-200 shadow-sm text-base  focus:outline-none focus:ring-2 "
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg flex-1 appearance-none  bg-transparent  text-white placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-2 "
                      placeholder="email"
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg appearance-none  bg-transparent    text-white placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-2 "
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg  appearance-none  bg-transparent    text-white placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-2"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>

              {/* label */}
              <div className="flex flex-col gap-1 max-md:mt-4">
                <div class="">
                  <label className=" text-gray-700" for="name">
                    <textarea
                      className="py-4 rounded-lg flex-1 appearance-none  bg-transparent  w-full  px-4  text-white placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-2 border border-cyan-400"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows="11"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div class="col-span-2 text-right flex justify-center">
                  <button type="submit" class="py-2 px-4  button_setup  ">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Footer_resuse />
      </section>
    </>
  );
}

export default Contact