import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselTwo.css';
import img1 from './images/img-9.jpg';
import img2 from './images/img-10.jpg';
import img3 from './images/img-11.jpg';

const Caro2 = () => {
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
      <div className="container">
        <OwlCarousel className='owl-theme' loop margin={20} nav items={3} autoplay responsive={responsive}>
          <div className="item card">
            <img src={img1} alt="car-1" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4">For This Week Only 10% Discounts ON Fridays</p>
              <hr />
              <p className="text-center">
                <span style={{ fontSize: 'small' }}><i className="bi bi-calendar"></i>July 1,2018</span>
                <span style={{ fontSize: 'small' }}><i className="bi bi-chat-fill text-danger" ></i>2 Comments</span>
              </p>
              <hr />
              <p>
                Sagittis leo a bibendum. Etiam et suscipit est. Vivamus vestibulum
                mauris quis faucibus accumsan.
              </p>
            </div>
          </div>

          <div className="item card">
            <img src={img2} alt="car-2" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4" style={{ fontWeight: '500' }}>For This Week Only 10% Discounts ON Fridays</p>
              <hr />
              <p className="text-center">
                <span style={{ fontSize: 'small' }}><i className="bi bi-calendar text-danger" ></i>July 1, 2018</span>
                <span style={{ fontSize: 'small' }}><i className="bi bi-chat-fill text-danger" ></i>2 Comments</span>
              </p>
              <hr />
              <p>
                Donec rutrum purus in magna commodo, et dapibus est feugiat
                donec tincidunt massa elit.
              </p>
            </div>
          </div>

          <div className="item card">
            <img src={img3} alt="car-3" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4" style={{ fontWeight: '500' }}>For This Week Only 10% Discounts ON Fridays</p>
              <hr />
              <p className="text-center">
                <span style={{ fontSize: 'small' }}><i className="bi bi-calendar text-danger" ></i>July 1, 2018</span>
                <span style={{ fontSize: 'small' }}><i className="bi bi-chat-fill text-danger" ></i>2 Comments</span>
              </p>
              <hr />
              <p>
                Sagittis leo a bibendum. Etiam et suscipit est. Vivamus vestibulum
                mauris quis faucibus accumsan.
              </p>
            </div>
          </div>

          <div className="item card">
            <img src={img1} alt="car-4" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4" style={{ fontWeight: '500' }}>For This Week Only 10% Discounts ON Fridays</p>
              <hr />
              <p className="text-center">
                <span style={{ fontSize: 'small' }}><i className="bi bi-calendar text-danger" ></i>July 1, 2018</span>
                <span style={{ fontSize: 'small' }}><i className="bi bi-chat-fill text-danger" ></i>2 Comments</span>
              </p>
              <hr />
              <p>
                Donec rutrum purus in magna commodo, et dapibus est feugiat
                donec tincidunt massa elit.
              </p>
            </div>
          </div>

          <div className="item card">
            <img src={img2} alt="car-2" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4" style={{ fontWeight: '500' }}>For This Week Only 10% Discounts ON Fridays</p>
              <hr />
              <p className="text-center">
                <span style={{ fontSize: 'small' }}><i className="bi bi-calendar text-danger" ></i>July 1, 2018</span>
                <span style={{ fontSize: 'small' }}><i className="bi bi-chat-fill text-danger" ></i>2 Comments</span>
              </p>
              <hr />
              <p>
                Donec rutrum purus in magna commodo, et dapibus est feugiat
                donec tincidunt massa elit.
              </p>
            </div>
          </div>

          <div className="item card">
            <img src={img3} alt="car-3" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4" style={{ fontWeight: '500' }}>For This Week Only 10% Discounts ON Fridays</p>
              <hr />
              <p className="text-center">
                <span style={{ fontSize: 'small' }}><i className="bi bi-calendar text-danger" ></i>July 1, 2018</span>
                <span style={{ fontSize: 'small' }}><i className="bi bi-chat-fill text-danger" ></i>2 Comments</span>
              </p>
              <hr />
              <p>
                Sagittis leo a bibendum. Etiam et suscipit est. Vivamus vestibulum
                mauris quis faucibus accumsan.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Caro2;
