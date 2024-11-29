import React from 'react';
import { Foot } from '../Foot';

export const Contactsec2 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="name" className="form-label my-lg-3">
                Name<span className="text-danger"><sup>*</sup></span>
              </label>
              <input type="text" className="form-control my-2 border border-secondary" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label my-lg-3">
                E-Mail<span className="text-danger"><sup>*</sup></span>
              </label>
              <input type="text" className="form-control my-2 border border-secondary" />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label my-lg-3">
                Subject<span className="text-danger"><sup>*</sup></span>
              </label>
              <input type="text" className="form-control my-2 border border-secondary" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label my-lg-3">
                Message<span className="text-danger"><sup>*</sup></span>
              </label>
              <textarea id="message" className="form-control my-2" style={{ height: '30vh' }} />
            </div>
            <button type="submit" className="btn btn-danger my-4">Submit</button>
          </div>

          <div className="col-lg-6 col-sm-12 my-3">
            <h3>Get In Touch</h3>
            <div className="rulerz"></div>
            <p className="my-2 text-justify">Pellentesque feugiat feugiat ipsum, nec sollicitudin tortor
            convallis et. In venenatis, turpis eu condimentum ultrices, dui erat
            elementum ante.</p>

            <h3 className="my-3">Contact Details</h3>
            <div className="rulerz"></div>

            <div className="mt-3">
              <div className="my-4"><span><i className="bi bi-geo-alt-fill me-2 text-danger"></i>700 5th Avenue, New York City, United States</span><br /></div><hr />
              <div className="my-4"><span><i className="bi bi-telephone-fill me-2 text-danger"></i>1800-1111-2222</span><br /></div><hr />
              <div className="my-4"><span><i className="bi bi-envelope-heart-fill me-2 text-danger"></i>booking@example.com</span></div><hr />
            </div>

            <h3>Social Media</h3>
            <div className="rulerz my-4"></div>
            <span><a href="#"><i className="bi bi-facebook text-danger me-3 h4"></i></a></span>
            <span><a href="#"><i className="bi bi-instagram text-danger me-3 h4"></i></a></span>
            <span><a href="#"><i className="bi bi-pinterest text-danger me-3 h4"></i></a></span>
            <span><a href="#"><i className="bi bi-twitter text-danger me-3 h4"></i></a></span>
            <span><a href="#"><i className="bi bi-youtube text-danger me-3 h4"></i></a></span>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="container my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.919461107319!2d77.71204380806898!3d8.69919849403334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0412471d773739%3A0xb4dcacfd574b43d4!2sBRASSY%20ACADEMY%20%7C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1727498373069!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Foot />
    </>
  );
};
