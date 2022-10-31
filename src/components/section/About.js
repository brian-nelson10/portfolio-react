import React from 'react'
import Skills from '../layouts/Skills'
import { skillsBar, skillsBar2 } from '../../profile'

const About = () => {
    return (
        <section id="about" className="container">
        <div className="row align-items-start">
            <div className="col aos-init aos-animate" data-aos="zoom-out-right" data-aos-delay="1000" data-aos-duration="1000">
                <div className="d-flex justify-content-start lead"><ul>
                    <li>Web Developer who builds</li>
                    <li>beautiful websites, inside and out.</li>
                    <li>His perfect balance of technical</li>
                    <li>and managerial skills stands him</li>
                    <li>apart from the crowd.</li>
                </ul> </div>
                <div>
                <h1 className="d-flex justify-content-start skillText"><ul>
                            <li>Imagine.</li>
                            <li style={{color: "salmon"}}>Code.</li>
                            <li>Develop.</li>
                        </ul></h1>
    
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="row gy-5">
                    <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate"
                    data-aos-duration="1000" data-aos-delay="500" style={{display: 'grid', margin: 'auto'}}>
                        {skillsBar.map((x) => 
                   <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                        )}
                    </div>
                 
            </div>      
        </div>
        </div>
        <div className="col">
                <div className="row">
                    <div className="row gy-5">
                    <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate"
                    data-aos-duration="1000" data-aos-delay="500" style={{display: 'grid', margin: 'auto'}}>
                        {skillsBar2.map((x) => 
                   <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                        )}
                    </div>
                 
            </div>      
        </div>
        </div>
        
        </div>
    </section>
    )
}

export default About
