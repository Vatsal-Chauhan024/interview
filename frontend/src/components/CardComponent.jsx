import React from "react";

const CardComponent = ({ headingProp, contentProps }) => {
  return (
    <>
      <div className="px-2 py-5 flex flex-col items-center bg-gray-300 hover:bg-indigo-400 hover:text-white rounded-md max-w-64 flex-1">
        <h1 className="text-2xl font-bold">{headingProp}</h1>
        <span className="text-lg">{contentProps}</span>
      </div>
    </>
  );
};

export default CardComponent;
