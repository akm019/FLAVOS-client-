import React, { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';

const AddressForm = ({ onSave }) => {
  const [address, setAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    postcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSave = () => {
    onSave(address);
  };

  return (
    <form className="address-form">
      <AddressAutofill accessToken="pk.eyJ1IjoiYWF5dXNoa20iLCJhIjoiY2x4ZThndHVuMGF4MDJrc2hydjZvMXdsZSJ9.boDYvMd9Z9ljH0slTAuANQ">
        <input
          name="addressLine1"
          placeholder="Address Line 1"
          type="text"
          autoComplete="address-line1"
          value={address.addressLine1}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
      </AddressAutofill>
      <input
        name="addressLine2"
        placeholder="Address Line 2"
        type="text"
        autoComplete="address-line2"
        value={address.addressLine2}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        name="city"
        placeholder="City"
        type="text"
        autoComplete="address-level2"
        value={address.city}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        name="state"
        placeholder="State"
        type="text"
        autoComplete="address-level1"
        value={address.state}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        name="country"
        placeholder="Country"
        type="text"
        autoComplete="country"
        value={address.country}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        name="postcode"
        placeholder="Postcode"
        type="text"
        autoComplete="postal-code"
        value={address.postcode}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <button
        type="button"
        onClick={handleSave}
        className="p-2 bg-blue-500 text-white rounded mt-4"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
