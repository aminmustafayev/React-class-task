import React from "react";
import styled from "./index.module.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Getaway = () => {
  return (
    <>
      <h1 className={styled.h1}>Find your next getaway</h1>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
                <div className={styled.cardImg}>
                    <img src="https://assets.nicepagecdn.com/d2cc3eaa/2625193/images/14.jpg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div> */}



      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/2625193/images/14.jpg" />
    </Card>
    </>
  );
};

export default Getaway;
