import React from 'react';

export const Aboutsec4 = () => {
  return (
    <>
      {/* <!-- section 4 --> */}
      <div className="container my-5 p-0">
        <div className="row">
          <div className="col-lg-6">
            <h4>How We Work</h4>
            <div className="dot mt-2 mb-3">
              <div className="title-line"></div>
            </div >
            <div className='large'>
            <video width="100%" height="300" controls autoplay loop muted src="/images/dev.mp4" alt="img-7"></video>
          </div>
          </div>

          <div className="col-lg-6 ps-md-5">
          <div className="accordion accordion-flush mt-lg-5 mb-lg-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <span className="text-danger"> &gt; </span> Donec rutrum purus in magna commodo.
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Donec rutrum purus in magna commodo, et dapibus est feugiat donec tincidunt
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush my-lg-3" id="accordionExample2">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <span className="text-danger"> &gt; </span> Sagittis leo a bibendum. Etiam et suscipit est.
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Sagittis leo a bibendum. Etiam et suscipit est elit.
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush my-lg-3" id="accordionExample3">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <span className="text-danger"> &gt; </span> Donec rutrum purus in magna commodo.
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Donec rutrum purus in magna commodo, et dapibus est feugiat donec tincidunt
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush mt-lg-5 mb-lg-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <span className="text-danger"> &gt; </span> Donec rutrum purus in magna commodo.
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Donec rutrum purus in magna commodo, et dapibus est feugiat donec tincidunt
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush my-lg-3" id="accordionExample2">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <span className="text-danger"> &gt; </span> Sagittis leo a bibendum. Etiam et suscipit est.
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Sagittis leo a bibendum. Etiam et suscipit est elit.
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush my-lg-3" id="accordionExample3">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <span className="text-danger"> &gt; </span> Donec rutrum purus in magna commodo.
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Donec rutrum purus in magna commodo, et dapibus est feugiat donec tincidunt
                </div>
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </div>
      {/* <!-- section 4 --> */}
    </>
  );
};
