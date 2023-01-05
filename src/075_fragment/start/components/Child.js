import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolorum
        commodi quibusdam consequuntur cum maiores ut suscipit ratione accusamus
        quia reiciendis reprehenderit, maxime debitis quidem illum ducimus.
        Neque, commodi delectus.
      </p>
    </React.Fragment>
  );
};

export default Child;
