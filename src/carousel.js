// import React from 'react';
// import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel
// import 'owl.carousel/dist/assets/owl.carousel.css'; // OwlCarousel CSS
// import 'owl.carousel/dist/assets/owl.theme.default.css'; // Default theme

// const CarouselComponent = () => {
//   // Define the options for the carousels
//   const options = {
//     autoplay: true,
//     autoplayTimeout: 5000,
//     smartSpeed: 800,
//     loop: true,
//     margin: 20,
//     nav: true,
//     dots: true,
//     responsive: {
//       0: { items: 1 },
//       576: { items: 2 },
//       768: { items: 3 },
//       1024: { items: 4 },
//     }
//   };

//   return (
//     <div>
//       {/* Carousel with 8 items */}
//       <h2>Carousel with 8 Cards</h2>
//       <OwlCarousel className="owl-theme" {...options} items={8}>
//         {/* Replace with actual card content */}
//         <div className="item"> 
//           <img class="card-img-top" src="Home/img-5.jpg" alt="img-1" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">BMW Grant Sedan</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>6 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>2 Bags</p>
//               </div>
//               </div>
//         <div className="item">
//         <img src="Home/img-2.jpg" alt="img-2" class="h-md-auto h-sm-auto h-l-auto"
//               style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">Cadillac Escalade</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>6 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>4 Bags</p>
//               </div>
//         </div>
//         <div className="item">
//         <img src="Home/img-3.jpg" alt="img-3" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">Lincoln MKT</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>6 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>3 Bags</p>
//             </div>
//         </div>
//         <div className="item">
//         <img src="Home/img-4.jpg" alt="img-4" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">Audi Grant Sedan</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>4 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>2 Bags</p>
//             </div>
//           </div>
//         <div className="item">
//         <img src="Home/img-5.jpg" alt="img-1" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">BMW Grant Sedan</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>4 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>2 Bags</p>
//             </div>
//           </div>
//         <div className="item">
//         <img src="Home/img-2.jpg" alt="img-2" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">Cadillac Escalade</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>6 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>4 Bags</p>
//             </div>
//           </div>
//         <div className="item">
//         <img src="Home/img-3.jpg" alt="img-3" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">Lincoln MKT</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>6 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>3 Bags</p>
//             </div>
//           </div>
//         <div className="item">
//         <img src="Home/img-4.jpg" alt="img-4" style={{width: '100%', height: '40vh'}} />
//             <hr />
//             <div class="mt-lg-5 ms-lg-2">
//               <h5 class="card-title">Audi Grant Sedan</h5>
//               <div class="line-title"></div>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>4 Passengers</p>
//               <p class="card-text"><i class="bi bi-check text-danger me-1"></i>2 Bags</p>
//             </div>
//           </div>
//       </OwlCarousel>

//       {/* Carousel with 6 items */}
//       <h2>Carousel with 6 Cards</h2>
//       <OwlCarousel className="owl-theme" {...options} items={6}>
//         {/* Replace with actual card content */}
//         <div className="item"><h4>Card 1</h4></div>
//         <div className="item"><h4>Card 2</h4></div>
//         <div className="item"><h4>Card 3</h4></div>
//         <div className="item"><h4>Card 4</h4></div>
//         <div className="item"><h4>Card 5</h4></div>
//         <div className="item"><h4>Card 6</h4></div>
//       </OwlCarousel>
//     </div>
//   );
// };

// export default CarouselComponent;
