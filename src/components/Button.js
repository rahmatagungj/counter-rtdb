import React from "react";
import "./Button.scss";

const Button = ({ count, setCount, db, loading }) => {
  const updateCount = (val) => {
    db.update({ value: val });
  };

  const HandlePlus = async () => {
    if (!loading) {
      await updateCount(count + 1);
      setCount(count + 1);
    }
  };

  const HandleMinus = async () => {
    if (!loading && count !== 0) {
      await updateCount(count - 1);
      setCount(count - 1);
    }
  };

  const HandleReset = async () => {
    if (!loading) {
      await updateCount(0);
      setCount(0);
    }
  };

  return (
    <div>
      <button onClick={HandleMinus}>-</button>
      <button onClick={HandlePlus}>+</button>
      <div>
        <button className="reset" onClick={HandleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Button;
