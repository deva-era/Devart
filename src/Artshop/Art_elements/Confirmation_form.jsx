import React from "react";

function Confirmation_form({
  return_check,
  confimed_order,
  handleOrderClick,
  user_data,
}) {
  let desired_format_date = user_data.date.split("-").reverse().join("-");
  console.log(desired_format_date);
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

      <section id="form1" className="form-container p-5 ">
        <div className=" grid grid-cols-2 max-md:grid-cols-1 mx-auto w-full gap-y-1">
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2 ">
            <h1>Name:</h1>
            <span>{user_data.name}</span>
          </div>
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>Email:</h1>
            <span>{user_data.email}</span>
          </div>
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>Ph.no:</h1>
            <span>{user_data.phone}</span>
          </div>
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>temp:</h1>
            <span>temp</span>
          </div>
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>Artwork type:</h1>
            <span>landscape</span>
          </div>
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>Expecting Date:</h1>
            <span>{desired_format_date}</span>
          </div>
          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>No.of person:</h1>
            <span>{user_data.persons}</span>
          </div>

          <div className="grid grid-cols-2 md:-space-x-4  max-sm:space-x-2">
            <h1>Address:</h1>
            <p className="w-1/4 h-full flex flex-wrap">{user_data.address}</p>
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
