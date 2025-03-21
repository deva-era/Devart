import React from "react";
import { useContext, useState, useRef,useEffect } from "react";

function Confirmation_form({
  return_check,
  confimed_order,
  handleOrderClick,
  user_data,
  Buydata,
}) {
  let desired_format_date = user_data.date.split("-").reverse().join("-");


   const audioRef = useRef(new Audio("/2.mp3")); // Replace with your audio file path

   function playsound() {
     audioRef.current.currentTime = 0; // Reset to start
     audioRef.current.play();
   };

  return (
    <div className="confirmation_form ">
      {/* close */}
      <button
        class=" text-sm absolute right-8 top-2 cursor-pointer px-5 border rounded-lg bg-red-800  "
        onClick={() => {
          handleOrderClick(false), return_check();
        }}
      >
        Close
      </button>
      <button
        class=" text-sm absolute left-8 top-2 cursor-pointer px-5 border rounded-lg bg-red-800  "
        onClick={() => return_check()}
      >
        Back
      </button>

      {/* heading */}
      <div className="text-3xl text-yellow-200   font-cinzel p-10 text-center ">
        Place Order
      </div>

      <section id="" className="flex flex-col ">
        <div className="form-container2">
          <div className=" picture_container ">
            <img
              src={`./artshop/card images/${Buydata.type}/${Buydata.img}.jpg `}
              alt={`hi`}
              className=" object-contain w-full h-full "
            />

            {/* <div className="relative bottom-2 ">1</div> */}
          </div>

          <div className="overflow-y-auto">
            Delivery:
            <div className="flex flex-col justify-center w-64 pb-1 ">
              <div className="ml-3 flex flex-col ">
                <div className=" flex flex-col ">
                  <span className="font-bold text-indigo-200 ">
                    <span className=" font-extrabold font-serif text-indigo-200 ">
                      Expecting
                    </span>{" "}
                    {desired_format_date}.
                  </span>
                  <span>{user_data.email}</span>
                  <span>+{user_data.phone}</span>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="flex flex-col border-b-4 w-64 pb-1 border-t-4 ">
              Address:
              <div className="ml-3 flex flex-col ">
                <span className=" font-extrabold font-serif text-indigo-200 ">
                  Delivery to{" "}
                  <span className="capitalize">{user_data.name}</span>
                </span>
                <p className="text-sm font-thin">{user_data.address}</p>
              </div>
            </div>
            {/* Delivery */}
            <div className="flex flex-col border-b-4  max-md:border-b-0 w-64 ">
              Order details
              <div className="grid grid-cols-2">
                <div className="ml-3 flex flex-col ">
                  <span>Items:</span>
                  <span>Discount:</span>
                  <span>Delivery:</span>
                  <span className=" font-extrabold font-cinzel">
                    Order Total:
                  </span>
                </div>
                <div className="ml-3 flex flex-col ">
                  <span>{Buydata.price}.00</span>
                  <span className="text-green-400"> -₹100.00</span>
                  <span> ₹250.00</span>
                  <span className=" font-extrabold font-cinzel">
                    ₹{Buydata.price + 150}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          id="submitbutton"
          className="mt-2"
          type="submit"
          onClick={() => {
            handleOrderClick(false), confimed_order(), playsound();
          }}
        >
          Place Order
        </button>
      </section>
    </div>
  );
}

export default Confirmation_form;
