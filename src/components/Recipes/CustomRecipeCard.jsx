
import React from 'react';

const CustomRecipeCard = ({ title, imageUrl, recipeUrl }) => {
  return (
    <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg overflow-hidden bg-white w-72">
      <img
        className="object-cover w-full h-40 md:h-48 xl:h-52"
        src={imageUrl}
        alt={title}
      />

      <div className="px-5 py-3">
        <h2 className="font-semibold text-lg">{title}</h2>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition duration-150"
          type="button"
          onClick={() => window.open(recipeUrl, '_blank')}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default CustomRecipeCard;
