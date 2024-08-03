

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Coming Soon</h1>
        <p className="text-lg mb-8 text-gray-600">
          We are working hard to bring you a great experience. Stay tuned!
        </p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;