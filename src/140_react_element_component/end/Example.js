// POINT React要素とコンポーネントの関係
import React from "react";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

// const Hello = () => {
//   return <h1>Hello</h1>;
// }

const Example = () => {
  return (
    <div>
      <Bye/>
      {/* <Hello/> */}
    </div>
  );
};

// console.log(Example());

export default Example;

