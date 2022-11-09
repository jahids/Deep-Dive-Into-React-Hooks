import React, { useState } from "react";

const UseCounter = ({ initial, max, min }) => {
  const [count, setcount] = useState(initial);
  const handleIncrement = () => {
    if (count < max) {
      setcount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > min) {
      setcount(count - 1);
    }
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
  };
};

export default UseCounter;
