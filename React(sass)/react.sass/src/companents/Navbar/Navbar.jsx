import React from "react";
import styled from "./index.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styled.divSize}>
        <div className={styled.imgNav}>
          <div className={styled.colorDiv}>
            <div className={styled.marGin}>
              <h1>Find yourself outside at a cozy Camp this month.</h1>
              <p>
                Habitant morbi tristique senectus et. Nec dui nunc mattis enim
                ut tellus. Semper auctor neque vitae tempus quam pellentesque
                nec nam aliquam.{" "}
              </p>
              <p>
                Image from <a>Freepik</a>
              </p>
              <button className={styled.button}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
