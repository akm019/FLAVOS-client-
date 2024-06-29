// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate a delay to mimic async operation (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Pass the city value to the parent component for processing
      onSearch(city);
    } catch (error) {
      setError('Error searching for city. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter city..."
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="text-red-500 ml-2">{error}</p>}
    </div>
  );
};

export default SearchBar;

