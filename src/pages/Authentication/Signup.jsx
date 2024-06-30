import React, { useState } from 'react';
import { useDispatch,  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveForm } from '../../redux/reducer';
import Layout from '../../components/Layout/Layout';
import Logo from "../../assets/smitLogo.jpg"
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    batch: '',
  });

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveForm(formData));
    setFormData({ name: '', course: '', batch: '' });
    navigate("/")
    
  };

  return (
    <Layout>
      <div className="signup-container">
        <img className='image' src={Logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Select Course:</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="Web&App Development">Web&App Development </option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Flutter development">Flutter development</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="batch">Select Batch:</label>
            <select
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            >
              <option value="">Select Batch</option>
              <option value="Batch 10">Batch 10</option>
              <option value="Batch 9">Batch 9</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
