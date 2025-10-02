import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CauseModal.css';

const CauseModal = ({
  show,
  onClose,
  name,
  description,
  donation_goal,
  donation_raised,
  category,
  cover_image,
  media,
  pdf_document,
}) => {
  if (!show) {
    return null;
  }

  const images = [cover_image, ...(media || [])];
  const donationProgress = Math.round((donation_raised / donation_goal) * 100);

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog modal-xl modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {/* Left Column: Details */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>{category}</small>
                </div>
                <p>{description}</p>
                <div className="causes-progress bg-light p-3 pt-2 mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="text-dark">
                      ${parseFloat(donation_goal).toLocaleString()} <small className="text-body">Goal</small>
                    </p>
                    <p className="text-dark">
                      ${parseFloat(donation_raised).toLocaleString()} <small className="text-body">Raised</small>
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
                      <span>{donationProgress}%</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {pdf_document && (
                    <a href={pdf_document} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      View Project PDF
                    </a>
                  )}
                  <Link to="/donate" className="btn btn-primary py-2 px-3">
                    Donate Now
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column: Image Carousel */}
              <div className="col-lg-6">
                <div id="causeModalCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {images.map((image, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image} className="d-block w-100 modal-image" alt={`Project image ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#causeModalCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#causeModalCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseModal;