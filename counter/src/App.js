import { useState } from 'react'

export default function CounterApp() {
  const [score, setScore] = useState(0);

  function increment () {
    setScore(score + 1);
  }

  function decrement () {
    setScore(score - 1);
  }

  return (
    <>
    <h1>{ score }</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
}
