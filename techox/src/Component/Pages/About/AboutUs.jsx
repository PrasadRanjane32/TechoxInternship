import React from 'react'
import './Aboutus.css'
const AboutUs = () => {
    return (
        <>


            {/* About section */}
            <section class="about" id="about">
                <h2 class="aheading"><i class="fas fa-user-alt"></i> About <span>Techox</span></h2>

                <div class="row">

                    <div class="image">
                        {/* <img draggable="false" class="tilt" src={Hero} alt=""></img> */}
                    </div>
                    <div class="content">


                        <p>
                            TECHOX is one of the prominent software companies that helps other organizations to transform into digital enterprises.Established in July 2020, we have a workforce of quality developers, designers, project managers, quality specialists and others. We are efficient in providing the best IT consulting, Development and Business related solutions. We aim to provide cost effective solutions with a combination of knowledge and expertise in IT and also enhance business capabilities to differentiates you from competitors in the market and provides better engagement with customers, partners and employees.

                            We also provide training and development courses and programs through Techox Learning initiative. An initiative of young generation leaders to create a meaningful impact on the society. The main target is to provide quality education to the students so that it leads to the enhancement of their skills. Moreover, the courses include projects to make you deal with real world scenarios. Live Classes by Young Generation Instructors. In-Demand Technical and Non-Technical Skills. Affordable Fee & Fun Learning. A wide open Student Community to interact and clear doubts. </p>

                       

                        <div class="readmorebtn">
                            <a href="https://www.techox.co.in/about-us.html" class="btn"><span>Read More</span>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs