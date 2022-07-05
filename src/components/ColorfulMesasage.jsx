import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contntStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contntStyle}>{children}</p>;
};

export default ColorfulMessage;
