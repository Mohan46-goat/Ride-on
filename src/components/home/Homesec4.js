import React from 'react'

export const Homesec4 = () => {
  return (
    <>
    
    <div className="container p-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div>
              <h3>About Us</h3>
              <div className="dot">
                <div className="line-title my-3"></div>
              </div>
              <p>
              Donec rutrum purus in magna commodo, et dapibus est feugiat donec tincidunt
            massa elit consequat sollicitudin donec tincidunt nulla vulputate fermentum
             Nulla blandit nisi vel mi tincidunt, id lacinia magna bibendum.
              </p>
              <p>
              Sagittis leo a bibendum. Etiam et suscipit est. Vivamus vestibulum mauris quis
             faucibus accumsan. Integer ac leo vel eros auctor dignissim a eget nisi nunc non
              tempus orci. Phasellus congue vestibulum tempus duis consequat ex ac.
              </p>
              <button type="button" className="btn btn-danger rounded-pill mb-3" style={{height: "max-content", width: "150px", borderRadius: "30px" }}>
                Learn More
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 align-self-start">
            <video width="100%" height="300" controls autoplay loop muted src="/images/dev.mp4" alt="img-7"></video>
          </div>
        </div>
      </div>
    
    </>
  );
};
