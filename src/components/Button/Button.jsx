import React from "react";

const Button = (props) => {
  const {
    children = "Button",
    variant = "bg-[#C1CFA1] border-[#9AA580]",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`py-2 px-6 text-black font-semibold rounded-md w-full ${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
