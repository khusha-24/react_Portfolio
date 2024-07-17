import React from 'react'
import skills from "./data/skills.json";
function Skills() {
  return (
    <>
      <skills />
      <div className="container skills" id="skills">
        <h1>Skills</h1>
        <div className="row items" >
          {skills.map((data) => (
            <>
              <div className="item col-sm-6 col-md-4 col-lg-3 " key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`./assets/${data.imageSrc}`} alt="" />
                <h4>{data.title}</h4>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills