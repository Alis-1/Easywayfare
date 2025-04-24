import React, { useState, useEffect } from 'react';
import '../App.css'; 
import Logo from '../components/Logo';
import useFetch from '../hooks/UseFetch';

const HomePage = () => {
  const [tips, setTips] = useState([]);
  const { data, loading, error } = useFetch('YOUR_API_ENDPOINT_HERE');

  useEffect(() => {
    if (data) {
      setTips(data);
    }
  }, [data]);

  return (
    <div className="home-page">
        <Logo /> 
        <h1>Journey starts here</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading travel tips.</p>}
    </div>
  );
};

export default HomePage;