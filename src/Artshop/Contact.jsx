import React from 'react'
import Footer_resuse from './Footer_resuse';
function Contact() {
  return (
    <>
      <form id="contact" class="mbet-10 mt-10" method='g'>
        <div className="flex flex-col w-full ">
          <div
            className="mb-6 text-3xl font-light text-center text-gray-800 blue_footer_shadow"
            style={{ color: "cyan" }}
          >
            Contact me !
          </div>
          <div className=" flex gap-3 justify-center max-md:flex-col max-md:px-20">
            <div className="flex flex-col gap-2">
              <div className="col-span-2 lg:col-span-1">
                <div className=" ">
                  <input
                    type="text"
                    id="contact-form-name"
                    class=" rounded-lg flex-1 appearance-none  bg-transparent  w-full py-2 px-4  text-white placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2  contact_border"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    class=" rounded-lg flex-1 appearance-none  bg-transparent  w-full py-2 px-4  text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 contact_border"
                    placeholder="email"
                  />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    class=" rounded-lg flex-1 appearance-none  bg-transparent  w-full py-2 px-4  text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 contact_border"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    class=" rounded-lg flex-1 appearance-none  bg-transparent  w-full py-2 px-4  text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 contact_border"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>

            {/* label */}
            <div className="flex flex-col gap-1">
              <div class="col-span-2">
                <label className=" text-gray-700" for="name">
                  <textarea
                    className="py-4 rounded-lg flex-1 appearance-none  bg-transparent  w-full  px-4  text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 contact_border"
                    id="comment"
                    placeholder="Enter your comment"
                    name="comment"
                    rows="5"
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
      <Footer_resuse/>
    </>
  );
}

export default Contact