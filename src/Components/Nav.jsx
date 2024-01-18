import React from "react";

const Nav = (props) => {
  return (
    <>
      <div className=" bg-slate-600 flex items-center w-full h-auto pl-4">
        <div className="flex items-center p-4 w-2/3">
          <img
            className="h-12 w-12 rounded-full"
            src="https://wallpapers.com/images/hd/face-close-up-itachi-uchiha-8rnu7j2hbvgd4sb6.jpg"
            alt=""
          />
          <h4 className="text-white font-bold text-2xl ml-2">{props.name}</h4>
        </div>
        <div className="flex justify-end p-4 items-center w-1/3">
          <button className="pl-4">{props.icon1}</button>
          <button className="pl-4">{props.icon2}</button>
          <button className="pl-4">{props.icon3}</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
