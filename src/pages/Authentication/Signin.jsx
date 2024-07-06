<<<<<<< HEAD
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
=======
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import Layout from '../../components/Layout/Layout';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/Firebase';
import Loader from '../../components/Loader/Loader';

const Signin = () => {
    const context = useContext(myContext);

    const { loading, setLoading } = context;
``
    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const userLoginFunction  = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
            const user = userCredential.user;
            navigate("/")

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        }
        setLoading(false)

   

    };

return (
    <Layout>
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className="login_Form bg-sky-50 min-w-40 px-8 py-6 border border-sky-100 rounded-xl shadow-md">
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-sky-500'>
                        Login
                    </h2>
                </div>
                <form onSubmit={userLoginFunction}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            value={userLogin.email}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    email: e.target.value
                                });
                            }}
                            required
                            className='bg-sky-50 border border-sky-200 px-2 py-2 min-w-80 rounded-md outline-none placeholder-sky-200'
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userLogin.password}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                });
                            }}
                            required
                            className='bg-sky-50 border border-sky-200 px-2 py-2 min-w-80 rounded-md outline-none placeholder-sky-200'
                        />
                    </div>
                    <div className="mb-5">
                        <button
                            type='submit'
                            className='bg-sky-500 hover:bg-sky-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-sky-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    </Layout>
);
};

export default Signin;
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
