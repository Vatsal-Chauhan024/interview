import React from "react";

const Heading = ({headingProps}) => {
  return (
    <div className="flex-col gap-3">
      <h1 className="text-3xl sm:text-5xl font-semibold text-indigo-500 px-3 py-5">
        {headingProps}
      </h1>
      <hr className="" />
    </div>
  );
};

export default Heading;
