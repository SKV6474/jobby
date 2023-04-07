import { useState } from "react";

const Stepper = (props: {
  initial: number;
  onChange: (newCount: number) => void;
}) => {
  const { initial, onChange } = props;

  const [count, setCount] = useState<number>(initial);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <button data-cy="decrement" onClick={handleDecrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Stepper;
