import { useState, useContext, useEffect } from "react";
import Confirmation_form from "./Confirmation_form";

function Form({ handleOrderClick, handle_congrates, Buydata }) {

  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    file: "",
    person: 0,
  }));

    // useEffect(() => {
    //   if (formData.person !== Buydata.person) {
    //     setFormData((prevUser) => ({ ...prevUser, person: Buydata.person })); // ✅ Update age on mount
    //   }
    // }, [formData]);

  // useEffect(()=>{
  // //  setFormData({ ...formData, person: Buydata.person });
  //   // setFormData((prevData) => ({
  //   //   ...prevData,
  //   //   person: prevData.person + 1,
  //   // }));

  // },[]);

  // console.log("Expect: " + Buydata.person);
  console.log("form :" + formData.person);
  // console.log("p :" + p);

  // display condition for forms
  const [click_confirm_order, set_click_confirm_order] = useState(false);

  // return_check
  function return_check() {
    set_click_confirm_order(false);
  }

  // close click
   function close_click() {
     setFormData({
       name: "",
       email: "",
       phone: "",
       address: "",
       date: "",
       file: "",
       person: 0,
     });
   };

  // confirmed order
  function confirmed_order() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      date: "",
      file: "",
      person: 0,
    });
    set_click_confirm_order(false);
    handle_congrates(true);
  }

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData({ name: "", email: "", password: "" });
    set_click_confirm_order(true);
    console.log(formData);
  };

  // person count
  // const [person, set_person] = useState(p);
  // const temp = formData.person + Buydata.person;

  const plus = (e) => {
    e.preventDefault();
    if (formData.person+Buydata.person < 9) {
      // set_person((data) => data + 1);
      setFormData((prevData) => ({
        ...prevData,
        person: prevData.person + 1,
      }));
    }
  };

  const minus = (e) => {
    e.preventDefault();
    if (formData.person + Buydata.person > Buydata.person) {
      // set_person((data) => data - 1);
      setFormData((prevData) => ({
        ...prevData,
        person: prevData.person - 1,
      }));
    }
  };
  // count end
  // console.log(Buydata);
  return (
    <div>
      <div
        className={`mx-auto bg-black/10 rounded-xl my-auto w-8/12 relative mt-16 ${
          click_confirm_order ? "hidden" : "block"
        }`}
      >
        {/* close */}
        <button
          class=" text-sm absolute right-8 top-2 cursor-pointer px-5 border rounded-lg bg-red-800  "
          onClick={() => {
            handleOrderClick(), close_click();
          }}
        >
          Close
        </button>

        {/* heading */}
        <div className="text-3xl text-yellow-200   font-cinzel p-10 text-center ">
          Place Order
        </div>

        {/* form */}

        <form id="form1" onSubmit={handleSubmit} className="form-container p-5">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="Name"
                name="name"
                value={formData.name}
                onSubmit={handleSubmit}
                placeholder="Enter name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="Eg.91 6379XXXXXX"
                // pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
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
                onChange={handleChange}
                value={formData.address}
                onSubmit={handleSubmit}
                placeholder="Enter Address"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="">
              <label htmlFor="#">No.of Characters:&nbsp;</label>
              <div className="mt-1">
                <button className="mr-2 countperson" onClick={minus}>
                  -
                </button>
                <span
                  className=" person text-center bg-white"
                  id="person"
                  name="person"
                  value={formData.person}
                  onSubmit={handleSubmit}
                >
                  {formData.person + Buydata.person}
                </span>
                <button className="countperson   ml-2" onClick={plus}>
                  +
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date">Expecting Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Enter Date"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Image:</label>
              <input
                type="file"
                id="file"
                value={formData.file}
                onChange={handleChange}
                className="cursor-pointer border-none "
                name="file"
                // required
              />
            </div>

            <div className="form-group">
              <small className="text-slate-400">
                * Upload an image in PDF format.
              </small>
              <small className="text-slate-400">
                * Select a date with at least a 7-day gap.
              </small>
              <small className="text-slate-400">
                * Enter your phone number with the country code.
              </small>
            </div>
          </div>

          <button id="submitbutton" className="mt-2" type="submit">
            Continue
          </button>
        </form>
      </div>

      {/* Confirmation_form  */}
      <div
        id="viewclick"
        className={`${
          click_confirm_order ? "block" : "hidden"
        } fixed inset-0 w-full h-full `}
      >
        {" "}
        <div className=" mx-auto bg-black/10 rounded-xl my-auto w-8/12 relative mt-16">
          <Confirmation_form
            return_check={return_check}
            handleOrderClick={handleOrderClick}
            user_data={formData}
            confimed_order={confirmed_order}
            Buydata={Buydata}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
