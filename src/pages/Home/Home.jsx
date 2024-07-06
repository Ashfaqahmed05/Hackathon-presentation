<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const [hasCertificates, setHasCertificates] = useState(false);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/certificate/certificates?userId=${user._id}`);
        setHasCertificates(response.data.length > 0);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchCertificates();
  }, [user._id]);

  const handleGetCertificate = () => {
    if (user.hackathon === 'pass') {
      navigate(`/certificate/${user._id}`);
    } else {
      alert('You are not eligible for the certificate. Please contact the office.');
    }
  };

  return (
    <Layout>
      <div className='flex justify-between'>
        {hasCertificates && (
          <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={() => navigate(`/myCertificate/${user._id}`)}>My Certificate</button>
        )}
        {!hasCertificates && (
          <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={handleGetCertificate}>Get Certificate</button>
        )}
      </div>
    </Layout>
  );
};

export default Home;
=======
import React from 'react'
import Layout from '../../components/Layout/Layout'
import CertificateComponent from '../cirtificaate'

const Home = () => {
  return (
    <Layout>
        <CertificateComponent/>

    </Layout>
  )
}

export default Home
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
