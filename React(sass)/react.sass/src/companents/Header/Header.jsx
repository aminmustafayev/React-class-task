import React from 'react'
import styled from './index.module.scss'

const Header = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className={styled.header}>
                   <div className={`"header-img" ${styled.headerr}`}>
                   <img className={styled.image} src="https://capp.nicepage.com/images/default-logo.png" alt="" />
                   </div>
                   <div className={styled.headerIcons}>
                   <i className="fa-solid fa-bars"></i>
                   {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                   </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Header