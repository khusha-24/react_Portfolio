import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
function contact() {
  return (
    <>

      <div className="container-fluid  contact text-center" id="contact">
        <h3>Contact Me</h3>
        <hr />
        <div className="contact-icon"
          data-aos="zoom-in"
          data-aos-duration="1000"

        >
          <a href='8767197723' target='blank' className="items"><IoCallOutline className='icons' /></a>
          <a href='https://www.github.com' target='blank' className="items"><FaGithub className='icons' /></a>
          <a href='' target='blank' className="items"><FaWhatsapp className='icons' /></a>
          <a href='www.linkedin.com' target='blank' className="items"><FaLinkedin className='icons' /></a>
          <a href='mailto:avcharkushavarta@gmail.com' target='blank' className="items"><SiGmail className='icons' /></a>
        </div>
      </div>
    </>
  )
}

export default contact