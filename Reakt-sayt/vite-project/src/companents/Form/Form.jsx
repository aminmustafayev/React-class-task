import Button from "react-bootstrap/Button";

import "./Form.css";
import { useState } from "react";

const Form = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-div">
                <label htmlFor="">Course Name</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-div">
                <label htmlFor="">Course Name</label>
                <br />
                <input type="number" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-div">
                <label htmlFor="">Course Image</label>
                <br />
                <input type="text" />
              </div>
            </div>
          <Button className="btn w-25 m-auto mt-3" variant="primary">Add Course</Button>
          <div className="col-12">
              <div className="form-div">
                <label htmlFor="">Course Name</label>
                <br />
                <input type="text" placeholder="search..." />
              </div>
            </div>
          <Button className="btn w-25 " variant="primary">Sort Course</Button>

          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
