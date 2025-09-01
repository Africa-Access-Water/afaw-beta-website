
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ShareButton from "../components/ShareButton";

const SuccessPage = () => {
  return (
    <>
      <Navbar current="donation-success" />
      <Layout title="Donation Success - Africa Access Water">

      
        {/* Hero Section - Thank You Message */}
      <section className="position-relative text-white text-center">
  
          {/* Background image */}
          <img
            src="/img/IMG-20240418-WA0094.jpg"
            alt="Clean water flowing"
            className="img-fluid w-100"
            style={{
              height: "400px",
              objectFit: "cover",
              // Dark overlay effect to make text readable
              filter: "brightness(60%)"
            }}
          />
{/* IMG-20240420-WA0027 public\img\IMG-20240418-WA0094.jpg */}
        {/* Overlayed Text */}
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 text-white fw-bold">
            Thank You for Giving Water 
          </h1>
          <p className="lead mb-0">
            Your gift is changing lives in Mphande & Rufunsa.
          </p>
        </div>

      </section>


        {/*  Thank You Message */}
      <section className="container py-5 text-center">
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Because of your generosity, families will drink clean water, children will grow up
            healthier, and entire communities will thrive. These solar-powered water
            systems will directly impact <strong>over 2,300 people and 1,000 animals</strong> —
            transforming daily struggles into opportunities for dignity, growth, and hope.
          </p>
      </section>

        {/* Impact Tracker */}
      <section className="container text-center mb-5">
        <h3 className="fw-bold mb-3">Project Progress</h3>
        <p className="fs-5 text-primary">$8,200 of $10,000 raised</p>
        <div className="progress" style={{ height: "12px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "82%" }}
            aria-valuenow="8200"
            aria-valuemin="0"
            aria-valuemax="10000"
          ></div>
        </div>
        <p className="small text-muted mt-2">82% funded</p>
      </section>

        {/*  Stories Section */}
      <section className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Because of You</h2>
          <div className="row g-4">
            {[
              {
                img: "/img/carousel-1.jpg",
                text: "“Now I can go to school instead of fetching water.”",
                author: "mustapha, 13",
              },
              {
                img: "/img/potato.jpg",
                text: "“Our crops will grow even in the dry season.”",
                author: "Joseph, Farmer",
              },
              {
                img: "/img/about1.jpg",
                text: "“I can spend more time learning instead of fetching water.”",
                author: "Mary, Student",
              },
              {
                img: "/img/irrigated 1.jpg",
                text: "“Clean water means a healthier family.”",
                author: "Sarah, Mother",
              },
            ].map((story, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={story.img}
                    alt={story.author}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                  <div className="card-body text-center">
                    <blockquote className="blockquote mb-0">
                      <p className="fst-italic">{story.text}</p>
                      <footer className="blockquote-footer mt-2">
                        {story.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Next Step */}
      <section className="container text-center py-5 ">
        <h4 className="fw-bold mb-3"> Double Your Impact</h4>
        <p className="text-muted">
          Invite a friend to join you in bringing clean water to Africa.
        </p>
        <ShareButton />
        <a href="/posts" className="btn btn-outline-primary mt-3 mx-2 px-4">
          View Ongoing Projects
        </a>
      </section>
      </Layout>
    </>
  );
};

export default SuccessPage;
