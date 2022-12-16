import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "./counterSlice";
import styles from "./Counter.module.css";
import { decrement, increment, reset } from "./counterSlice";

export function Counter() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
          onClick={() => dispatch(decrement(5))}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        {/* <span className={styles.value}>0</span> */}
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
          onClick={() => dispatch(increment(5))}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          // value={incrementAmount}
          // onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
