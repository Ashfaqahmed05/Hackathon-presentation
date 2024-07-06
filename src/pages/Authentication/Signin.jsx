import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Logo from "../../assets/smitLogo.jpg"
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer';
import './signin.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user");
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const users = await response.json();
      const user = users.find(u => u.cnic === parseInt(formData.cnic) && u.password === formData.password);
      if (user) {
        dispatch(login(user))
        setFormData({ cnic: '', password: '' });
        navigate("/"); 
      } else {
        alert('Invalid CNIC or password');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Error fetching user data');
    }
  
  };

  return (
    <Layout>
      <div className="signup-container">
        <img className='image' src={Logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cnic">CNIC:</label>
            <input
              type="number"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password"
              id="password"
              name="password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
