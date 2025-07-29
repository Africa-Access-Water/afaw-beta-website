// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import VisionMissionObjectives from "../components/VisionMissionObjectives ";

import { causes } from '../data/causesData';
import Stat from '../components/Stat';
import Cause from '../components/Cause';
import About from '../components/About';

function Home() {
    return (
        <>
            <Helmet>
                <title>Africa Access Water | Home</title>
                <meta name="description" content="Empowering rural communities with clean water solutions." />
                <meta property="og:title" content="Africa Access Water" />
                <meta property="og:description" content="Empowering rural communities with solar-powered water systems." />
                <meta property="og:image" content="/images/og-home.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <Layout title="Africa Access Water" description="Learn how Africa Access Water empowers rural Africa with solar-powered water systems.">
                {/* Carousel Start */}
                <Carousel
                  slides={[
                    {
                      img: "img/hero.jpg",
                      alt: "Rural Community with Water System",
                      title: "Empowering Africa Through Water",
                      desc:
                        "We build solar-powered water infrastructure to improve food security, income, and climate resilience across rural Africa.",
                      buttonText: "Explore Our Work",
                      buttonLink: "our-work.html",
                    },
                    {
                      img: "img/about.jpg",
                      alt: "Women Empowerment in Agriculture",
                      title: "Water is Life. Empowerment is Impact.",
                      desc:
                        "Join us in empowering women, youth, and farmers with clean water for agriculture and economic independence.",
                      buttonText: "Donate Now",
                      buttonLink: "donate.html",
                    },
                  ]}
                />
                {/* Carousel End */}

                {/*Stats Section*/}
                <div className="container-xxl py-5 bg-light">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <Stat icon="fa fa-solar-panel" number="9" text="Solar-powered Water Infrastructure in 4 project sites" />
                            <Stat icon="fa fa-users" number="600" text="(5,000 People) Households food secure with income" />
                            <Stat icon="fa fa-tint" number="20000" text="People & 2,500 Animals with clean drinking water" />
                            <Stat icon="fa fa-dollar-sign" number="190000" text="Annual community income from produce" />
                        </div>
                    </div>
                </div>

                <VisionMissionObjectives/>
                
                {/* About Section */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <About />
                        </div>
                    </div>
                </div>


                <div className="container-xxl bg-light my-5 py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Be Part of a Project</div>
                            <h1 className="display-6 mb-4">Together, We Build Resilience Through Clean Water and Opportunity</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {causes.map((cause, index) => (
                                <Cause key={index} {...cause} />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Home;
