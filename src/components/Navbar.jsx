import React from 'react'

const Navbar = () => {
  return (
   <>
    <div className=" nav_bar sticky-top px-5"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#home" className="nav_item">Home</a>
            <a href="#Education" className="nav_item">Education</a>
            <a href="#skills" className="nav_item">Skills</a>
            <a href="#project" className="nav_item">Projects</a>
            <a href="#contact" className="nav_item">Contact</a>
        </div>
    </div>
   </>
  )
}

export default Navbar