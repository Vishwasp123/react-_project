import React from 'react'
import './Service.css';

import Service1 from "../assets/images/service1.jpg"
import Service2 from "../assets/images/service2.jpg"
import Service3 from "../assets/images/service3.jpg"
import Service4 from "../assets/images/service4.jpg"


const Service = () => {
    const serviceData = [
        {
            title: "Athletes", 
            desc: "To say calm under pressure, boost focus, and recover faster.",
            img: Service1
        },

        {
        title: "Entrepreneurs",
        desc: "To handle stress, make better decisions, and manage work-life balance.",
        img: Service2
        },
        {
        title: "Habitualist/Addicts",
        desc: "To improve emotional regulation, empathy, and communication.",
        img: Service3
        },
        {
        title: "Stressed People",
        desc: "To build daily mental habits that prevent stress, anxiety, and burnout.",
        img: Service4
        }
    ]




  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Who are taking our services</h2>
        
        <div className="services-grid">
          {serviceData.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-img-wrapper">
                <img src={item.img} alt={item.title} className="service-img" />
              </div>
              <div className="service-info">
                <h3 className="service-name">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
