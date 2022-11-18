import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Send Message</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.slack && <a title="Visit Slack profile" rel="noopener noreferrer" target="_blank" href={social.slack}><i className="fab fa-slack"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                   <div className="lead">Download Resume.</div> 
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">Made with ❤️ by brian nelson</p>
        </div>
    )
    
}

export default Contact
