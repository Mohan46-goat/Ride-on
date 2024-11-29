import React from 'react'

export const Homesec3 = () => {
  return (
    <>
    
    {/* <!--section-3--> */}


 {/* <!--section-3--> */}
 <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-lg-2 col-md-12 col-l-12 m-0" style={{ borderRight: "3px solid rgb(141, 138, 138)" }}>
          <div className="m-0 d-flex justify-content-center align-items-center">
            <ul className="menu m-0">
              <li className="text-center m-0">
                <a className="text-white m-0" style={{ textDecoration: "none" }} href="#">
                  Display
                </a>
              </li>
              <li className="text-center m-0">
                <a className="text-white m-0" style={{ textDecoration: "none" }} href="#">
                  Hourly
                </a>
              </li>
              <li className="text-center m-0">
                <a className="text-white m-0" style={{ textDecoration: "none" }} href="#">
                  Flat Rate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-md-12 col-l-12 align-self-lg-center">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="pickupAddress" className="form-label text-white" style={{ fontSize: "x-small" }}>
                Pick Up Address
              </label>
              <input type="text" className="form-control" placeholder="Pick Up Address" id="pickupAddress" />
            </div>
          </form>
        </div>

        <div className="col-lg col-md-12 col-l-12 align-self-lg-center">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="dropoffAddress" className="form-label text-white" style={{ fontSize: "x-small" }}>
                Drop Off Address
              </label>
              <input type="text" className="form-control" placeholder="Drop off Address" id="dropoffAddress" />
            </div>
          </form>
        </div>

        <div className="col-lg col-md-12 col-l-12 align-self-lg-center">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="returnType" className="form-label text-white" style={{ fontSize: "x-small" }}>
                Return
              </label>
              <select className="form-control" id="returnType">
                <option>One Way</option>
                <option>Return</option>
              </select>
            </div>
          </form>
        </div>

        <div className="col-lg col-md-12 col-l-12 align-self-lg-center">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="pickupDate" className="form-label text-white" style={{ fontSize: "x-small" }}>
                Pick Up Date
              </label>
              <input type="date" className="form-control" id="pickupDate" />
            </div>
          </form>
        </div>

        <div className="col-lg col-md-12 col-l-12 align-self-lg-center">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="pickupTime" className="form-label text-white" style={{ fontSize: "x-small" }}>
                Pick Up Time
              </label>
              <input type="time" className="form-control" id="pickupTime" />
            </div>
          </form>
        </div>

        <div className="col-lg col-md-12 col-l-12 align-self-lg-center my-3">
          <button type="submit" className="btn btn-danger rounded-pill mt-lg-4" style={{ fontSize: "x-small", height: "fit-content", width: "100px" }}>
            Reserve Now &gt;
          </button>
        </div>
      </div>
    </div>
      {/* <!--section-3--> */}
    </>
  );
};
