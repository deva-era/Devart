import React from "react";

function Divider({ divider_name }) {
  return (
    <center>
      <div className=" ">
        <div className="">
          <span className="text-center text-white text fredericka-the-great-regular  text-3xl">
            {divider_name}
          </span>
        </div>
      </div>
    </center>
  );
}

export default Divider;
