import React from "react";

const Textbox = (props) => {
  return (
    <div className="bg-slate-300 flex justify-center items-center m-2 p-2 relative">
      {props.icone4}
      <input
        className="bg-slate-500 p-1 w-full rounded-lg pl-10 text-slate-300 font-semibold placeholder:text-white"
        type="text"
        placeholder={props.placeholder}
      />
      {props.icone5}
    </div>
  );
};

export default Textbox;
