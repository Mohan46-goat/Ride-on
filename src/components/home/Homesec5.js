import React from 'react';
import pic from './images/eight.jpg';

export const Homesec5 = () => {
  const like = {
    backgroundImage:`url(${pic})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <>
      <div className="container-fluid pic-1 p-5 my-5" style={like}>
        <div className="col-12">
          <div className="text-white text-center">
            <h2 className="mb-lg-3 mt-lg-3">
              Book Online Today And Travel In Comfort<br />
              On Your Next Trip
            </h2>
            <div className="line">
              <div className="line-title my-3"></div>
            </div>
            <p className="mb-lg-3">
              Call Us On 1800-1111-2222 Or E-Mail Booking@website.com
            </p>
            <button type="button" className="btn btn-danger rounded-pill mt-lg-2" style={{ width: '170px' }}>
              Online Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
