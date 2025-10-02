import React, { useState } from 'react';
import CauseModal from './CauseModal';

const Cause = ({ name, description, donation_goal, donation_raised, category, cover_image, pdf_document, media }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const donationGoal = donation_goal > 100 ? 100 : donation_goal;
  const donationProgress = Math.round((donation_raised / donation_goal) * 100);

  return (
    <>
      <div className="col-lg-4 col-md-6 wow fadeInUp">
        <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
          <div className="text-center p-4 pt-0">
            <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
              <small>{category}</small>
            </div>
            <h5 className="mb-3">{name}</h5>
            <p>{description}</p>
            <div className="causes-progress bg-light p-3 pt-2">
              <div className="d-flex justify-content-between">
                <p className="text-dark">
                  ${donationGoal.toLocaleString()} <small className="text-body">Goal</small>
                </p>
                <p className="text-dark">
                  ${donation_raised.toLocaleString()} <small className="text-body">Raised</small>
                </p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${donationProgress}%` }}
                  aria-valuenow={donationProgress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>{Math.round(donationProgress)}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative mt-auto">
            <img className="img-fluid" src={cover_image} alt={description}
              style={{
                height: "250px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }} />
            <div className="causes-overlay">
              <button className="btn btn-outline-primary" onClick={handleOpenModal}>
                Read More
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CauseModal
        show={showModal}
        onClose={handleCloseModal}
        name={name}
        description={description}
        donation_goal={donation_goal}
        donation_raised={donation_raised}
        category={category}
        cover_image={cover_image}
        media={media}
        pdf_document={pdf_document}
      />
    </>
  );
};

export default Cause;
