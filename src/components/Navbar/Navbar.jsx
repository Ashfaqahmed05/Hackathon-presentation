<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import { logout } from "../../redux/reducer";


const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch()


    return (
        <nav className="bg-sky-800 relative top-0">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center py-3 lg:px-3">
                <div className="py-3 lg:py-0 text-center lg:text-left">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl">SMIT</h2>
                    </Link>
                </div>
                
                <div className="flex justify-center lg:justify-evenly text-white w-full lg:w-auto mt-4 lg:mt-0">
                    {isAuthenticated ? (
                        <>
                            <button className="border-2 p-1 hover:bg-white hover:text-sky-800 mx-2" onClick={()=> {dispatch(logout()); navigate("/signup");}}>Logout</button>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
=======
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem('users'));
    // const logout = () => {
    //     localStorage.clear('users');
    //     navigate("/login");
    // }
    // const cartItems = useSelector((state) => state.cart);
    // const navList = (
    //     <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
    //         <li>
    //             <Link to={'/'}>Home</Link>
    //         </li>
    //         <li>
    //             <Link to={'/allproduct'}>All Product</Link>
    //         </li>
    //         {!user ? <li>
    //             <Link to={'/signup'}>Signup</Link>
    //         </li> : ""}
    //         {!user ? <li>
    //             <Link to={'/login'}>Login</Link>
    //         </li> : ""}
    //         {user?.role === "user" && <li>
    //             <Link to={'/user-dashboard'}>User</Link>
    //         </li>}
    //         {user?.role === "admin" && <li>
    //             <Link to={'/admin-dashboard'}>Admin</Link>
    //         </li>}
    //         {user && <li className=" cursor-pointer" onClick={logout}>
    //             logout
    //         </li>}
    //         <li>
    //             <Link to={'/cart'}>
    //                 Cart({cartItems.length})
    //             </Link>
    //         </li>
    //     </ul>
    // )

    return (
        <nav className="bg-sky-800 relative top-0 ">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center py-3 lg:px-3">
                <div className="py-3 lg:py-0 text-center lg:text-left">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl">Logo</h2>
                    </Link>
                </div>
                {/* Uncomment and adjust this section if you need it */}
                {/* {user ?
                    <div className="flex justify-center mb-4 lg:mb-0">
                        {navList}
                    </div> :
                    <div className="w-52 flex justify-evenly text-white ">
                        <Link className="border-2 p-1 hover:bg-white hover:text-pink-600" to={'/login'}>Login</Link>
                        <Link className="border-2 p-1 hover:bg-white hover:text-pink-600" to={'/signup'}>Signup</Link>
                    </div>
                } */}
                <div className="flex justify-center lg:justify-evenly text-white w-full lg:w-auto mt-4 lg:mt-0">
                    {/* <Link className="border-2 p-1 hover:bg-white hover:text-sky-800 mx-2" to={'/signin'}>Login</Link> */}
                    <Link className="border-2 p-1 hover:bg-white hover:text-sky-800 mx-2" to={'/signup'}>Signup</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
