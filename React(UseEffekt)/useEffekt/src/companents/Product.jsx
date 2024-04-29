import React from "react";

const Product = () => {
  return (
    <>
      <div className="d-flex gap-5">
        <div>
          <p>Product Name</p>
          <input  type="text" name="" id="" />
        </div>
        <div>
          <p>Product Price</p>
          <input type="number" name="" id="" />
        </div>
      </div>
      <button className="btn  btn-primary mt-2">Submit form</button>
    </>
  );
};

export default Product;
