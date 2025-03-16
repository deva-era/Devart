import React from "react";
import { useContext,useState} from "react";
import { Buydatas } from "../Art_section";
// import "bootstrap/dist/css/bootstrap.min.css";

function Confirmation_form({
  return_check,
  confimed_order,
  handleOrderClick,
  user_data,
}) {
  let Buyingdata = useContext(Buydatas);
  const [recieved_data, set_recieved_data] =useState(null);
   console.log(Buyingdata);
    console.log("hiu");
  function recieving_data() {
    // Buyingdata.temp="he";
    // console.log(Buyingdata.price);
  }

  //reverse date
  let desired_format_date = user_data.date.split("-").reverse().join("-");

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
      <div className="text-3xl text-black  font-cinzel p-10 text-center ">
        Place Order
      </div>

      <section id="form1" className="form-container ">
        <div className="flex relative justify-center gap-6">
          <div className="w-3/6 border p-2 rounded-lg h-96 border-slate-50/10 flex flex-col flex-wrap">
            <img
              src={`./artshop/card images/portrait/0.jpg `}
              alt={`hi`}
              className=" object-contain w-full h-full"
            />
            <div className="relative bottom-2 ">1</div>
          </div>

          <div>
            {/* user details*/}
            <div className="flex flex-col justify-center w-64 pb-1 ">
              <div className="ml-3 flex flex-col ">
                <span className=" font-extrabold font-serif text-indigo-200">
                  Expecting: {desired_format_date}
                </span>
                <div className="grid grid-cols-2">
                  <div className=" flex flex-col ">
                    <span>Email:</span>
                    <span>Phone:</span>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-thin ">{user_data.email}</p>
                    <span>+{user_data.phone}</span>
                  </div>
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
            <div className="flex flex-col border-b-4 w-64 ">
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
                  <span>:</span>
                  <span className=" "> -₹100.00</span>
                  <span> ₹250.00</span>
                  <span className=" font-extrabold font-cinzel">₹Order.00</span>
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
            handleOrderClick(false), confimed_order();
          }}
        >
          Confirm Order
        </button>
      </section>
    </div>
  );
}

export default Confirmation_form;
