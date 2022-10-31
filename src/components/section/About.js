import React from 'react'
import Skills from '../layouts/Skills'
import { skillsBar, skillsBar2 } from '../../profile'

const About = () => {
    return (
        // <div id="about" className="effect2">
        //     <div data-aos="zoom-in-up" className="row">
        //     <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2"></div>
        //     <div className="col-12 offset-md-1 col-md-6 about">
                
        //         <p className="lead about-text">
        //             {about.paragraph}  
        //         </p>
        //         <div className="About-title-box">
        //         <h1 id="About" className="red-line d-flex justify-content-end">
        //             <ul>
        //                 <li>Imagine.</li>
        //                 <li>Code.</li>
        //                 <li>Develop.</li>
        //             </ul>
        //         </h1>
        //         </div>
        //     </div>
        //     </div>
        // <div className="container">
        // <div className="row align-items-start">
        //     <div className="col aos-init aos-animate" data-aos="zoom-out-right" data-aos-delay="1000" data-aos-duration="1000">
        //         <div className="d-flex justify-content-start lead"><ul>
        //             <li>Lets create robust,</li>
        //             <li>beautiful, and smart</li>
        //             <li>web or mobile applications.</li>
        //         </ul> </div>
        //         <div>
        //         <h1 className="d-flex justify-content-start"><ul>
        //                     <li style={{fontSize: '300%'}}>Imagine.</li>
        //                     <li style={{fontSize: '300%', color: "salmon"}}>Code.</li>
        //                     <li style={{fontSize: '300%'}}>Develop.</li>
        //                 </ul></h1>
        //                 </div>
        //         </div>

        //                 <div id="col Skills"> 
        //         <div className="row ">
        //         <div className="row">
        //             <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate"
        //             data-aos-duration="1000" data-aos-delay="500" style={{display: 'inline', margin: 'auto'}}>
        //                 <i class="fab fa-html5 skill__square" aria-hidden="true"></i>
        //                 <h6 className="mt-1 icon text-end">HTML5</h6>
        //             </div>
        //          <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
        //         data-aos-duration="1000" data-aos-delay="500" style={{display: 'inline', margin: 'auto',}}>
        //             <i class="fab fa-html5 skill__square" aria-hidden="true"></i>
        //             <h6 className="mt-1 icon text-end">CSS3</h6>
        //         </div>
        //         </div>
        //         <div id="row Skills"> 
        //         <div className="row d-flex justify-content-center skills">
        //             {skillsBar2.map((x) => 
        //                 <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
        //             )}̀
        //         </div> 
        //         </div>
        //     </div>
        //     </div>
        //     </div>
           
        // </div>
        <section className="container">
        <div className="row align-items-start">
            <div className="col aos-init aos-animate" data-aos="zoom-out-right" data-aos-delay="1000" data-aos-duration="1000">
                <div className="d-flex justify-content-start lead"><ul>
                    <li>Lets create robust,</li>
                    <li>beautiful, and smart</li>
                    <li>web or mobile applications.</li>
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
