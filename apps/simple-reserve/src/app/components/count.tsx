import React, { ReactNode, useState } from 'react';
import {FC} from 'react';
import {connect,useSelector,useDispatch} from 'react-redux';


const Count: FC = () => {
  
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const [count_1,setCount] = useState(0);

  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  const nibai = () => {
    dispatch({ type: "kakeru_2" });
  };
  const waruni = () => dispatch({ type: "waru_2" });

  const increaseCount = () => setCount(count_1+1);
  const decreaseCount = () => setCount(count_1-1);

  return (
    <>
      <div>Countコンポーネント:{count}</div>
      <button onClick={increase}>1増える</button>
      <button onClick={nibai}>2倍チャンス</button>
      <button onClick={decrease}>1減る</button>
      <button onClick={waruni}>1/2</button>

      <div>Stateのカウント:{count_1}</div>
      <button onClick={increaseCount}>1増える</button>
      <button onClick={decreaseCount}>1減る</button>
    </>
  );
}

export default Count;