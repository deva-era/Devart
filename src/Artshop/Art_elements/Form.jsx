import React from "react";
import { useState } from "react";

function Form({ handleOrderClick }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", password: "" });
    handleOrderClick(false);
  };

  // person count
  const [person, set_person] = useState(1);

  function plus() {
    if (person < 10) {
      set_person((data) => data + 1);
    } else {
      return "Reached max limit of persons!!!";
    }
  }

  function minus() {
    if (person >= 2) {
      set_person((data) => data - 1);
    } else {
      return "  Minimum should be 1 person !!!";
    }
  }
  // count end

  return (
    <div>
      <div className=" mx-auto bg-black/10 rounded-xl my-auto w-8/12 relative mt-16">
        {/* close */}
        <button
          class=" text-sm absolute right-8 top-2 cursor-pointer px-5 border rounded-lg bg-red-800  "
          onClick={() => handleOrderClick(false)}
        >
          Close
        </button>

        {/* heading */}
        <div className="text-3xl text-black  font-cinzel p-10 text-center ">
          Place Order
        </div>

        {/* form */}

        <form id="form1" onSubmit={handleSubmit} className="form-container p-5">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onSubmit={handleSubmit}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onSubmit={handleSubmit}
                placeholder="Enter Email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone.no:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onSubmit={handleSubmit}
                placeholder="Ex.938868XXXX"
                pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                inputmode="numeric"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                onSubmit={handleSubmit}
                placeholder="Enter Address"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="">
              <label htmlFor="#">No.of person:&nbsp;</label>
              <div className="mt-1">
                <button className="countperson mr-2" onClick={plus}>
                  +
                </button>
                <span className=" person text-center bg-white">{person}</span>
                <button className=" ml-2 countperson" onClick={minus}>
                  -
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Expecting Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Enter Date"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Image:</label>
              <input
                type="file"
                id="file"
                className="cursor-pointer border-none "
                name="file"
                required
              />
            </div>

            <div className="form-group">
              <small className="text-slate-400">
                * Upload image in PDF format
              </small>
            </div>
          </div>

          <button id="submitbutton" className="mt-2" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
