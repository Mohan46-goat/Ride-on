import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselOne.css';
import img1 from './images/img-2.jpg';
import img2 from './images/img-3.jpg';
import img3 from './images/img-4.jpg';

const Caro = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  }
      
  return (
    <>
      <div className="container my-5">
        <OwlCarousel className='owl-theme' loop margin={10} nav items={4} autoplay responsive={responsive}>
          <div className="item card">
            <img src={img1} alt="car-1" />
            <div className="card-body">
              <button className="btn bg-danger text-white">From $150</button>
              <p className="fs-4">Casillac Escalade</p>
              <div
                style={{
                  backgroundColor: '#e43c3c',
                  width: '40px',
                  height: '2px',
                }}
              ></div>
              <div className="check-items">
                <div><i className="bi bi-check"></i><span className="fs-5">6 Passengers</span></div>
                <div><i className="bi bi-check"></i><span className="fs-5">4 Bags</span></div>
              </div>
            </div>
          </div>

          <div className="item card">
            <img src={img2} alt="car-2" />
            <div className="card-body">
              <button className="btn bg-danger text-white">From $90</button>
              <p className="fs-4">Lincoln MKt</p>
              <div
                style={{
                  backgroundColor: '#e43c3c',
                  width: '40px',
                  height: '2px',
                }}
              ></div>
              <div className="check-items">
                <div><i className="bi bi-check"></i><span className="fs-5">6 Passengers</span></div>
                <div><i className="bi bi-check"></i><span className="fs-5">3 Bags</span></div>
              </div>
            </div>
          </div>

          <div className="item card">
            <img src={img3} alt="car-3" />
            <div className="card-body">
              <button className="btn bg-danger text-white">From $140</button>
              <p className="fs-4">BMW Grant Sedan</p>
              <div
                style={{
                  backgroundColor: '#e43c3c',
                  width: '40px',
                  height: '2px',
                }}
              ></div>
              <div className="check-items">
                <div><i className="bi bi-check"></i><span className="fs-5">4 Passengers</span></div>
                <div><i className="bi bi-check"></i><span className="fs-5">2 Bags</span></div>
              </div>
            </div>
          </div>

          <div className="item card">
            <img src={img1} alt="car-4" />
            <div className="card-body">
              <button className="btn bg-danger text-white">From $150</button>
              <p className="fs-4">Casillac Escalade</p>
              <div
                style={{
                  backgroundColor: '#e43c3c',
                  width: '40px',
                  height: '2px',
                }}
              ></div>
              <div className="check-items">
                <div><i className="bi bi-check"></i><span className="fs-5">6 Passengers</span></div>
                <div><i className="bi bi-check"></i><span className="fs-5">4 Bags</span></div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Caro;
