import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/auth/profile');
        const { username, phone, address } = response.data;
        setValue('username', username);
        setValue('phone', phone);
        setValue('address', address);
        setAddress(address);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [setValue]);

  const onSubmit = async (data) => {
    data.address = address;
    try {
      const response = await axios.post('/auth/profile', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddressChange = async (e) => {
    const searchText = e.target.value;
    setAddress(searchText);

    if (searchText.length > 2) {
      try {
        const response = await axios.get(`/mapbox/suggest?q=${searchText}`);
        setAddressSuggestions(response.data.suggestions);
      } catch (error) {
        console.error('Error fetching address suggestions:', error);
      }
    } else {
      setAddressSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAddress(suggestion.place_name);
    setAddressSuggestions([]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <input name="username" ref={register} placeholder="Name" style={styles.input} />
        <input name="phone" ref={register} placeholder="Phone Number" style={styles.input} />
        <input
          name="address"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter Address"
          style={styles.input}
        />
        <div style={styles.suggestions}>
          {addressSuggestions.map((suggestion, index) => (
            <div
              key={index}
              style={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.place_name}
            </div>
          ))}
        </div>
        <button type="submit" style={styles.button}>Save</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    background: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  suggestions: {
    position: 'absolute',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    zIndex: 1
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer'
  }
};

export default ProfileForm;
