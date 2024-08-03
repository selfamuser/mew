// components/TopProducts.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import productImage1 from '../assets/Products/prod1.jpg';
import productImage2 from '../assets/Products/prod2.jpg';
import productImage3 from '../assets/Products/prod3.jpg';

const products = [
  { id: 1, name: 'Filter for CNG Gas Line', image: productImage1 },
  { id: 2, name: 'NRV Check Value', image: productImage2 },
  { id: 3, name: 'Suction & Discharge Valve Set', image: productImage3 },
];

const TopProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">
          Our Top Products
        </h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="text-center px-4">
              <div className="bg-white rounded-lg p-4 mb-8 flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
                <a
                  href={`mailto:info@mahoonenggworks.com?subject=Inquiry about ${product.name}&body=Hello, I am interested in ${product.name}. Please provide more details.`}
                  className="bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopProducts;

// components/TopProducts.js

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
// import productImage1 from '../assets/Products/prod1.jpg';
// import productImage2 from '../assets/Products/prod2.jpg';
// import productImage3 from '../assets/Products/prod3.jpg';

// const products = [
//   { id: 1, name: 'Product 1', image: productImage1 },
//   { id: 2, name: 'Product 2', image: productImage2 },
//   { id: 3, name: 'Product 3', image: productImage3 },
// ];

// const TopProducts = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-8 text-white">
//           Our Top Products
//         </h2>
//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product.id} className="text-center px-4">
//               <div className="bg-white rounded-lg p-4 mb-8 flex flex-col items-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-72 h-72 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
//                 <a
//                   href={`mailto:mitarthmahoon@mahoonenggworks.com?subject=Inquiry about ${product.name}&body=Hello, I am interested in ${product.name}. Please provide more details.`}
//                   className="bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg"
//                 >
//                   Inquire Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default TopProducts;