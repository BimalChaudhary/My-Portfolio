import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className="services-formate">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <h4>{service.s_desc}</h4>
                <div className="services-readmore">
                    <h4>Read More</h4>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
