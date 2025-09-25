
import React, { useState, useEffect } from 'react';
import '../styles/ProjectsModal.css';

const ProjectsModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.media.length - 1 : prevIndex - 1
    );
  };

  const donationProgress =
    (parseFloat(project.donation_raised) / parseFloat(project.donation_goal)) * 100;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="project-details">
            <h2>{project.name}</h2>
            <p className="project-category">{project.category}</p>
            <p>{project.description}</p>
            <div className="donation-progress">
              <div
                className="progress-bar"
                style={{ width: `${donationProgress}%` }}
              ></div>
            </div>
            <div className="donation-info">
              <span>Raised: ${parseFloat(project.donation_raised).toLocaleString()}</span>
              <span>Goal: ${parseFloat(project.donation_goal).toLocaleString()}</span>
            </div>
            <a href="/donate" className="btn btn-primary cta-button">
              Donate Now
            </a>
          </div>
          <div className="project-media">
            <div className="slideshow-container">
              {project.media.map((url, index) => (
                <div
                  className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                  key={index}
                >
                  <img src={url} alt={`Project media ${index + 1}`} />
                </div>
              ))}
              <button className="prev" onClick={prevImage}>&#10094;</button>
              <button className="next" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
