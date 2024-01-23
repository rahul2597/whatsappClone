import React from "react";

const Textbox = (props) => {
  return (
    <div className="bg-white flex justify-center items-center p-2 relative pl4">
      {props.icone4}
      <input
        className="bg-white p-1 w-full rounded-lg pl-16 text-slate-700 font-semibold placeholder:text-Gray"
        type="text"
        placeholder={props.placeholder}
      />
      {props.icone6}
      {props.icone5}
     
    </div>
  );
};

export default Textbox;
