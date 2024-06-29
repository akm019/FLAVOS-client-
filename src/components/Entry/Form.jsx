// ProfileForm.js

import React, { useState } from 'react';
import MapWithGeocoder from '../Location/UserLocation';

const Form = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    address: {
      latitude: null,
      longitude: null,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressSelect = (address) => {
    setFormData({
      ...formData,
      address,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black text-white p-8 rounded-md">
      <h2 className="text-2xl mb-4">User Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-400 mb-2">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 mb-2">Address</label>
        <MapWithGeocoder onAddressSelect={handleAddressSelect} />
        {formData.address.latitude && formData.address.longitude && (
          <p className="mt-2">
            Selected Address: Latitude: {formData.address.latitude}, Longitude: {formData.address.longitude}
          </p>
        )}
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save Profile
      </button>
    </form>
  );
};

export default Form;
