/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader"
import Layout from "../../components/Layout/Layout";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const userSignupFunction = async (event) => {
        event.preventDefault();
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            const userRefrence =  collection(db, "user")
            await addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/signin')
        } catch (error) {
            toast.error(error.message)
            console.log(error.message);
        }
        setLoading(false);

    }
    return (
      <Layout>
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-sky-50 px-8 py-6  min-w-80 border border-sky-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-sky-500 '>
                            Signup
                        </h2>
                    </div>
                    <form onSubmit={userSignupFunction}>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                })
                            }}
                            required
                            className='bg-sky-50 border border-sky-200 px-2 py-2 min-w-80 rounded-md outline-none placeholder-sky-200'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder='Email Address'
                            value={userSignup.email}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    email: e.target.value
                                })
                            }}
                            required
                            className='bg-sky-50 border border-sky-200 px-2 py-2 min-w-80 rounded-md outline-none placeholder-sky-200'
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                })
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
                            Signup
                        </button>
                    </div>
                    </form>
                    <div>
                        <h2 className='text-black'>Have an account <Link className=' text-sky-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>

                </div>
            </div>
        </div>
        </Layout>
    );
}

export default Signup;