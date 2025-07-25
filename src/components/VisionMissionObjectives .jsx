import React from 'react';
import "../styles/VisionMissionObjectives.css";

const VisionMissionObjectives = () => {
  return (
    <>
    <section className="Feautes section">
        <div className="container">
            {/* about us */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center px-4 mx-auto responsive-width">
                        <h2>Welcome to Africa Access Water</h2>
                        <p>We are a non-profit organization based in Zambia, established in 2019. We design, equip, and
                            implement sustainable solar-powered water infrastructure and systems for productive use,
                            aiming to improve livelihoods and combat rural poverty across Africa.</p>
                    </div>
                </div>
            </div>
            {/* our vision and mission */}
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="single-features">
                        <div className="signle-icon">
                            <i className="icofont icofont-eye-alt"></i>
                        </div>
                        <h3>Our Vision</h3>
                        <p>African communities developed through solar-powered water.</p>
                    </div>

                </div>
                <div className="col-lg-6 col-12">
                    <div className="single-features last">
                        <div className="signle-icon">
                            <i className="icofont icofont-flag"></i>
                        </div>
                        <h3>Our Mission</h3>
                        <p>To equip rural communities in Zambia and Africa with solar-powered water infrastructure and
                            systems for
                            productive use, food security, and socio-economic development.</p>
                    </div>

                </div>

            </div>
        </div>
    </section>

    {/* Our Objectives */}
    <section className="Feautes section mt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mx-auto responsive-width">
                        <h2>Our Objectives</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="single-features">
                        <div className="signle-icon">
                            <i className="icofont icofont-energy-solar"></i>
                        </div>
                        <h3>Infrastructure Development</h3>
                        <p>1. To provide solar-powered water infrastructure in rural communities, enhancing access to water
                            for productive use, improving food security and socio-economic development in Zambia and
                            Africa.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="single-features">
                        <div className="signle-icon">
                            <i className="icofont icofont-users-alt-4"></i>
                        </div>
                        <h3>Community Empowerment</h3>
                        <p>2. To empower women and youth in rural communities by providing access to water resources that
                            support agricultural activities and entrepreneurship, fostering economic independence and
                            improving livelihoods</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="single-features last">
                        <div className="signle-icon">
                            <i className="icofont icofont-book-alt"></i>
                        </div>
                        <h3>Research & Advocacy</h3>
                        <p>3. To enhance knowledge and technology in Africa's water economics through research and advocacy
                            for improved national, regional, and global policies.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default VisionMissionObjectives;