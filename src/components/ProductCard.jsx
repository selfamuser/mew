/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl p-6 mb-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4 transition-transform duration-200 ease-in-out hover:scale-105"
        style={{ objectFit: 'cover', maxHeight: '200px' }}
      />
      <h2 className="text-2xl font-bold text-white mb-2 transition-colors duration-200 ease-in-out hover:text-yellow-300">{product.name}</h2>
      <p className="text-gray-300 mb-4">{product.description}</p>
      <div className="text-gray-400 mb-2">
        <strong>Category:</strong> <span className="text-white">{product.category}</span>
      </div>
      <div className="text-gray-400 mb-2">
        <strong>Price:</strong> <span className="text-white">${product.price}</span>
      </div>
      <div className="text-gray-400 mb-4">
        <strong>Availability:</strong> <span className="text-white">{product.availability}</span>
      </div>
      <button className="bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200 ease-in-out">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
