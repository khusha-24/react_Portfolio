import React from 'react'
import education from './data/education.json'
const Education = () => {
  return (
    <>
      <education />
      <div className="container edu" id="Education" >
        <h1>Education</h1>
        {
          education.map((data) => {
            return (
              <>
                <div key={data.id} className='edu-item'
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="left">
                    <img src={`./assets/${data.imageSrc}`} alt="" />
                  </div>
                  <div className="right text-start">
                    <h2>{data.roll}</h2>
                    <span style={{ color: "yellowgreen" }}>
                      <h4>{data.Name}</h4>
                    </span>
                    <h4 style={{ color: "yellow" }}>{data.start_end_date}</h4>
                    <h4 style={{ color: "yellow" }}>{data.per}</h4>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Education