import React from 'react';

const Cause = ({ delay, title, desc, goal, raised, tag, img, alt }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay}>
      <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
        <div className="text-center p-4 pt-0">
          <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
            <small>{tag}</small>
          </div>
          <h5 className="mb-3">{title}</h5>
          <p>{desc}</p>
          <div className="causes-progress bg-light p-3 pt-2">
            <div className="d-flex justify-content-between">
              <p className="text-dark">
                ${goal.toLocaleString()} <small className="text-body">Goal</small>
              </p>
              <p className="text-dark">
                ${raised.toLocaleString()} <small className="text-body">Raised</small>
              </p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${(raised / goal) * 100}%` }}
                aria-valuenow={(raised / goal) * 100}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span>{Math.round((raised / goal) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative mt-auto">
          <img className="img-fluid" src={img} alt={alt} 
              style={{
                height: "250px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center"
          }}/>
          <div className="causes-overlay">
            <a className="btn btn-outline-primary" href="#">
              Read More
              <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                <i className="fa fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cause;
