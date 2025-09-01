// import React from "react";
// import Layout from "../components/Layout";
// import Navbar from "../components/Navbar";

// const SuccessPage = () => {
//   return (
//     <>
//       <Navbar current="donation-success" />
//       <Layout title="Donation Success - Africa Access Water">
//           {/* Banner Image */}
//          <img
//         src="/img/pipe.jpg"
//         alt="Smiling woman cutting vegetables"
//         className="img-fluid rounded-md shadow"
//         style={{ height: "300px", width: "100%", objectFit: "cover" }}
//       />
//         <div className="container mx-auto mt-10 px-4 py-12 text-center">
          
//           <h1 className="text-3xl md:text-4xl font-bold text-green-600 mt-5 mb-6">
//             Thank You for Your Donation!
//           </h1>

//           <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
//             🌍 Your generosity is the heartbeat of this mission. Because of your
//             support, families will drink clean water, children will grow up
//             healthier, and entire communities will thrive for generations to
//             come. From the bottom of our hearts—thank you for being part of this
//             change.
//             <br />
//             <br />
//             These life-changing projects in Mphande and Rufunsa communities,
//             where your donation will help with the installation of
//             solar-powered-water systems, will directly impact <strong> over 2,300 people
//             and 1,000 animals </strong> transforming daily struggles into opportunities
//             for growth, health, and dignity.
//           </p>

//             {/* Impact Tracker */}
//          <div className="my-4">
//               <h5>Project Progress</h5>
//                   <p>$8,200 of $10,000 raised</p>
//         <div className="progress" style={{ height: "25px" }}>
//           <div
//             className="progress-bar progress-bar-striped bg-success"
//             role="progressbar"
//             style={{ width: "82%" }}
//             aria-valuenow="8200"
//             aria-valuemin="0"
//             aria-valuemax="10000"
//           >
//             82%
//           </div>
//         </div>
//       </div>

//          {/* Donor Badge */}
//       {/* <div className="my-5">
//         <h5>You Gave Water Today 💧</h5>
//         <img
//           src="/img/donor-badge.png"
//           alt="Donor Badge"
//           className="img-fluid my-3"
//         />
//         <button className="btn btn-primary">
//           Share on Social Media
//         </button>
//       </div> */}

       
//      {/* Stories from the Ground Section */}
// <section className="stories-section py-5">
//   <div className="container">
//     <h2 className="text-center mb-4">Real Stories, Real Change</h2>
//     <div className="row g-4">
      
//       {/* Story 1 */}
//       <div className="col-md-6 col-lg-3">
//         <div className="story-card text-center p-3 h-100">
//           <img src="/img/woman.jpg" alt="Grace" className="story-img mb-3" />
//           <blockquote className="blockquote">
//             “Now I can go to school instead of fetching water.”
//             <footer className="blockquote-footer mt-2">Grace, 32</footer>
//           </blockquote>
//         </div>
//       </div>

//       {/* Story 2 */}
//       <div className="col-md-6 col-lg-3">
//         <div className="story-card text-center p-3 h-100">
//           <img src="/img/potato.jpg" alt="Joseph" className="story-img mb-3" />
//           <blockquote className="blockquote">
//             “Our crops will grow even in the dry season.”
//             <footer className="blockquote-footer mt-2">Joseph, Farmer</footer>
//           </blockquote>
//         </div>
//       </div>

//       {/* Story 3 */}
//       <div className="col-md-6 col-lg-3">
//         <div className="story-card text-center p-3 h-100">
//           <img src="/img/about1.jpg" alt="Mary" className="story-img mb-3" />
//           <blockquote className="blockquote">
//             “I can spend more time learning instead of fetching water.”
//             <footer className="blockquote-footer mt-2">Mary, Student</footer>
//           </blockquote>
//         </div>
//       </div>

//       {/* Story 4 */}
//       <div className="col-md-6 col-lg-3">
//         <div className="story-card text-center p-3 h-100">
//           <img src="/img/irrigated 1.jpg" alt="Sarah" className="story-img mb-3" />
//           <blockquote className="blockquote">
//             “Clean water means a healthier family.”
//             <footer className="blockquote-footer mt-2">Sarah, Mother</footer>
//           </blockquote>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>



         

//         {/* Encouraged Next Step */}
//       <div className="my-5">
//         <h4>🌍 Double Your Impact</h4>
//         <p>
//           Invite a friend to join you in bringing clean water to Africa.
//         </p>
//         <button className="btn btn-outline-primary">Share this Project</button>
//       </div>

//          <a
//             href="/posts"
//             className="inline-block px-6 py-3 bg-green-600  font-medium rounded-lg hover:bg-green-700 transition"
//           >
//             View Ongoing Projects
//           </a>

//         </div>
//       </Layout>
//     </>
//   );
// };

// export default SuccessPage;



import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ShareButton from "../components/ShareButton";

const SuccessPage = () => {
  return (
    <>
      <Navbar current="donation-success" />
      <Layout title="Donation Success - Africa Access Water">

        {/* 🌍 Hero Section */}
        {/* Hero Section - Thank You Message */}
<section className="position-relative text-white text-center">
  
  {/* Background image */}
  <img
    src="/img/pipe.jpg"
    alt="Clean water flowing"
    className="img-fluid w-100"
    style={{
      height: "400px",
      objectFit: "cover",
      // Dark overlay effect to make text readable
      filter: "brightness(60%)"
    }}
  />

  {/* Overlayed Text */}
  <div className="position-absolute top-50 start-50 translate-middle">
    <h1 className="display-4 text-white fw-bold">
      Thank You for Giving Water 💧
    </h1>
    <p className="lead mb-0">
      Your gift is changing lives in Mphande & Rufunsa.
    </p>
  </div>

</section>


        {/* ❤️ Thank You Message */}
        <section className="container py-5 text-center">
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Because of your generosity, families will drink clean water, children will grow up
            healthier, and entire communities will thrive. These solar-powered water
            systems will directly impact <strong>over 2,300 people and 1,000 animals</strong> —
            transforming daily struggles into opportunities for dignity, growth, and hope.
          </p>
        </section>

        {/* 📊 Impact Tracker */}
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

        {/* 👩🏾‍🤝‍👨🏼 Stories Section */}
        <section className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Because of You</h2>
            <div className="row g-4">
              {[
                {
                  img: "/img/IMG-20240418-WA0095.jpg",
                  text: "“Now I can go to school instead of fetching water.”",
                  author: "Grace, 23",
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

        {/* 📩 Next Step */}
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
