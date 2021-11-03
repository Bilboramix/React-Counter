import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  return (
    <main>
      <div className="counter">
        <button
          onClick={() => {
            setCounter(count - 1);
          }}
        >
          <i className="fas fa-minus minus"></i>
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCounter(count + 1);
          }}
        >
          <i className="fas fa-plus plus"></i>
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
        className="reset"
      >
        Reset
      </button>
    </main>
  );
};

export default Counter;
