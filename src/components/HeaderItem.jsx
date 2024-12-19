import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-center gap-3 text-[14px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
      <span>{Icon}</span>
      <h1 className="">{name}</h1>
    </div>
  );
};

export default HeaderItem;
