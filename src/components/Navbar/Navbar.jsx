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
