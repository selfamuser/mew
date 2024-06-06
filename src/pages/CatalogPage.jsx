import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('none');
  const [search, setSearch] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsPerPage = 9;

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailabilityFilter(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) => {
    const isInCategory = filter === 'All' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesAvailability = availabilityFilter === 'All' || product.availability === availabilityFilter;
    return isInCategory && matchesSearch && matchesAvailability;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'low-to-high') {
      return a.price - b.price;
    }
    if (sort === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8 animate-fadeIn">
        <h1 className="text-4xl font-bold text-white mb-8">Our Products</h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <label className="text-gray-300">Filter by category:</label>
            <select onChange={handleFilterChange} className="bg-gray-800 text-gray-300 p-2 rounded w-full">
              <option value="All">All</option>
              <option value="Drilling Machines">Drilling Machines</option>
              <option value="Milling Machines">Milling Machines</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="text-gray-300">Filter by availability:</label>
            <select onChange={handleAvailabilityChange} className="bg-gray-800 text-gray-300 p-2 rounded w-full">
              <option value="All">All</option>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="text-gray-300">Sort by price:</label>
            <select onChange={handleSortChange} className="bg-gray-800 text-gray-300 p-2 rounded w-full">
              <option value="none">None</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="text-gray-300">Search by name:</label>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearchChange}
              className="bg-gray-800 text-gray-300 p-2 rounded w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {currentProducts.map(product => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Modal for selected product */}
        {selectedProduct && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="max-w-xl bg-gray-800 rounded-lg p-8 relative">
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-white mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-300 mb-4">{selectedProduct.description}</p>
              <p className="text-gray-400 mb-2"><strong>Category:</strong> {selectedProduct.category}</p>
              <p className="text-gray-400 mb-2"><strong>Price:</strong> ${selectedProduct.price}</p>
              <p className="text-gray-400"><strong>Availability:</strong> {selectedProduct.availability}</p>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-2 rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
