const Shimmer = () => {
    return (
      <div className="flex items-center mt-5 ml-4 gap-4 p-4 w-64 h-42 border border-gray-300 rounded-lg shadow-md animate-pulse">
        {/* Shimmer Image */}
        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
  
        {/* Shimmer Text */}
        <div className="flex flex-col gap-2 w-3/4">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    );
  };

export default Shimmer;
