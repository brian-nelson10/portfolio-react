import React from 'react'
import Project from '../layouts/Project'
import { projects, section3Title } from '../../profile'

const Works = () => {
    return (
        <>
        <div className='container'>
            <div className='row align-items-start'>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                <div className='col'>
                    </div>
                    <div data-aos="fade-left" className="col aos-init aos-animate jus" data-aos-delay="1000" data-aos-duration="1000">
                    <h4 className="d-flex justify-content-end lead">
                        <ul>
                            <li>All of the coffee</li>
                            <li>i managed to turn</li>
                            <li>into software..</li>
                        </ul>
                    </h4>
                    </div>
                    <div className="d-flex mx-auto text-center ">
                        
                         <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>  
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Works
