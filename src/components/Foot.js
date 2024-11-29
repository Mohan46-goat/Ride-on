import React from 'react'

export const Foot = () => {
  return (
    <>
    
    <div className="container-fluid bg-dark text-white p-0">
      <div className='p-5'>
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-l-12">
        <div>
          <h4>ABOUT US</h4>
          <div className="straight">
            <div className="line-straight my-3"></div>
          </div>
          <p style={{fontSize: 'small'}}>Pellentesque feugiat feugiat ipsum, nec sollicitudin tortor
            convallis et. In venenatis, turpis eu condimentum ultrices, dui erat
            elementum ante.</p>
          <p style={{fontSize: 'small'}}> Quis felis. Praesent aliquet porttitor sem, at pretium erat
            tristique at. Proin molestie eros et ipsum pretium efficitur.
            Curabitur ligu.</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-12 col-sm-12 col-l-12">
        <div>
          <h4>NEWSLETTER</h4>
          <div className="straight">
            <div className="line-straight my-3"></div>
          </div>
          <p style={{fontSize: 'small'}}>Subscribe to our newsletter for news,<br />Updates,exculsive discounts and offers.
          </p>
          <input type="text" className="form-control my-3" style={{borderRadius:"0px"}} />
          <button className="btn btn-danger rounded-pill my-2"
            style={{fontSize: 'small', height: 'max-content',width: '100'}}>Subscribe</button>
        </div>
      </div>

      <div className="col-lg-3 col-md-12 col-sm-12 col-l-12">
        <div>
          <h4>CONTACT DETAILS</h4>
          <div className="straight">
            <div className="line-straight my-3"></div>
          </div>
          <p style={{fontSize: 'small'}}><i className="bi bi-geo-alt me-lg-1"></i>700 5th Avenue,New York City,
          <p style={{fontSize: 'small'}}>United States.</p>
          </p>
          <p style={{fontSize: 'small'}}> <i className="bi bi-telephone-fill me-lg-1"></i>1800-1111-2222<br />
          <p style={{fontSize: 'smaller', color: 'rgb(129, 128, 128)'}}>Mon-Fri,9.00am Until 6.30pm</p>
          </p>
          <p style={{fontSize: 'small'}}><i className="bi bi-envelope-heart-fill me-lg-1"></i>Booking@example.com<br />
          <p style={{fontSize: 'smaller', color: 'rgb(129, 128, 128)'}}>We Relpy Within 24 hrs</p>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-center text-white">
    <div className="row">
      <div className="col-12 foot-top" style={{borderTop: '2px solid rgb(103, 102, 102)'}}>
        <p className="my-3"><i className="bi bi-c-circle me-lg-1"></i>2024 Brassyacademy.All Rights Reserved</p>
      </div>
    </div>
    </div>
  </div>
    
    </>
  )
}
