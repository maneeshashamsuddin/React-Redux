import React from 'react'
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";



const MyComp: React.FC = () => {


    const count = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    return<>
   <h1>MyCom: {count}</h1>;
  <button onClick={() => dispatch(increment())}>Increment</button>
  <button onClick={() => dispatch(decrement())}>Decrement</button>
  </>
};

export default MyComp;


