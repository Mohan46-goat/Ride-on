import React from 'react';

export const Aboutsec3 = () => {
  return (
    <>
      {/* <!-- section 3 --> */}
      <div className="container p-lg-0 my-lg-5" style={{ width: "89%" }}>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="input-group my-1">
            <button
              className="form-control bg-dark text-white p-lg-2"
              style={{
                borderRadius: "0%",
                borderRight: "1px solid rgb(46, 44, 44)",
                height: "100px",
                color: "white",
              }}
            >
              Book Instantly Online Now
            </button>
            <span className="input-group-text bg-danger text-white" style={{ borderRadius: "0%" }}>
              &gt;
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="input-group my-1">
            <button
              className="form-control bg-dark text-white p-lg-2"
              style={{
                borderRadius: "0%",
                borderRight: "1px solid rgb(46, 44, 44)",
                height: "100px",
              }}
            >
              Learn More About Our Services
            </button>
            <span className="input-group-text bg-danger text-white" style={{ borderRadius: "0%" }}>
              &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- section 3 --> */}
    </>
  );
};
