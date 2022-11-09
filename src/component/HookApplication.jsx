import React from "react";
import UseCounter from "../Hook/UseCounter";

const CounterReusable = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const HookApplication = () => {
  // const {count, handleIncrement, handleDecrement} = UseCounter({initial : 5,  max : 10, min : 2})
  const count1 = UseCounter({ initial: 2, max: 10, min: 2 });
  const count2 = UseCounter({ initial: 2, max: 8, min: 3 });
  const count3 = UseCounter({ initial: 0, max: 6, min: 4 });
  return (
    <div>
      <CounterReusable
        count={count1.count}
        increment={count1.handleIncrement}
        decrement={count1.handleDecrement}
      />
      <CounterReusable
        count={count2.count}
        increment={count2.handleIncrement}
        decrement={count2.handleDecrement}
      />
      <CounterReusable
        count={count3.count}
        increment={count3.handleIncrement}
        decrement={count3.handleDecrement}
      />
    </div>
  );
};

export default HookApplication;
