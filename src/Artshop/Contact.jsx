import React from "react";
import Footer_resuse from "./Footer_resuse";
import { useState ,useEffect} from "react";
import Complaint_animation from "./contact/Complaint_animation";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });


  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
     setFormData({
       name: "",
       email: "",
       phone: "",
       subject: "",
       comment: "",
     });
  };

// scroll
  
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

    const [close, set_close] = useState(false);
    const handle_close = (status) => {
      set_close(status);
    };

    useEffect(() => {
      if (close) {
        setIsScrollLocked(true);
      } else {
        setIsScrollLocked(false);
      }
    }, [close]);

  return (
    <>
      {/* recieved animstion */}
      <div
        id="viewclick"
        className={`${
          close ? "block" : "hidden"
        } z-10  backdrop-blur-sm fixed inset-0 w-screen h-screen  bg-black/55 flex justify-center items-center`}
      >
        {close && <Complaint_animation handle_close={handle_close} />}
      </div>

      {/* form */}

      <section className=" ">
        <form
          id="contact"
          class="  bg-transparent backdrop-blur-sm p-5 rounded-md"
          method="get"
          onSubmit={handleSubmit}
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
                      class=" rounded-lg flex-1 appearance-none  bg-transparent    text-white  shadow-sm text-base  focus:outline-none focus:ring-2 placeholder:text-white "
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg flex-1 appearance-none  bg-transparent  text-white  placeholder:text-white shadow-sm text-base focus:outline-none focus:ring-2 "
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg appearance-none  bg-transparent    text-white  shadow-sm text-base focus:outline-none focus:ring-2 placeholder:text-white  "
                      placeholder="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      class=" rounded-lg  appearance-none  bg-transparent    text-white  shadow-sm text-base focus:outline-none focus:ring-2 placeholder:text-white "
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* label */}
              <div className="flex flex-col gap-1 max-md:mt-4">
                <div class="">
                  <label className=" text-gray-700" for="name">
                    <textarea
                      className="py-4 rounded-lg flex-1 appearance-none  bg-transparent  w-full  px-4  text-white  shadow-sm text-base focus:outline-none focus:ring-2 border border-cyan-400 placeholder:text-white "
                      id="comment"
                      placeholder="Enter your comment"
                      rows="11"
                      cols="40"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
                <div class="col-span-2 text-right flex justify-center">
                  <button
                    type="submit"
                    class="py-2 px-4  button_setup
                    "
                    onClick={() => {
                      handle_close(true);
                    }}
                  >
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

export default Contact;
