import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"; 
import logo from "../assets/images/logo.png";
import Profile from '../assets/images/Profile.png';

function NavBar() {

    const [navbar, setNavbar] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const lastName = localStorage.getItem("firstName");

    const sign_out = () => {
        setIsLogged(false);
    };

    const Auth_modal = () => {
        setOpenAuthModal(true);
    };
    const active = () => {
        setNavbar(!navbar);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogged(true);
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("id");
        setIsLogged(false);
    };
    
    return (
        <nav className="bg-white text-black top-0 px-12 py-4 shadow-md">
            <div className="flex items-center justify-around">
                <div className='flex items-center gap-10'>
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} alt="..." />
                    </NavLink>
                    <div className='Search&Mune flex gap-10'>
                        <div className='Shearch'>
                            <div className='absolute mx-2 my-3'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7536 13.5706L11.9212 10.7465C12.835 9.58229 13.3309 8.14459 13.329 6.66452C13.329 5.3464 12.9382 4.05789 12.2059 2.96191C11.4736 1.86594 10.4327 1.01173 9.21492 0.507309C7.99714 0.00288761 6.65713 -0.129092 5.36434 0.12806C4.07155 0.385212 2.88404 1.01995 1.952 1.952C1.01995 2.88404 0.385212 4.07155 0.12806 5.36434C-0.129092 6.65713 0.00288761 7.99714 0.507309 9.21492C1.01173 10.4327 1.86594 11.4736 2.96191 12.2059C4.05789 12.9382 5.3464 13.329 6.66452 13.329C8.14459 13.3309 9.58229 12.835 10.7465 11.9212L13.5706 14.7536C13.6481 14.8317 13.7402 14.8936 13.8417 14.9359C13.9432 14.9782 14.0521 15 14.1621 15C14.2721 15 14.381 14.9782 14.4825 14.9359C14.584 14.8936 14.6761 14.8317 14.7536 14.7536C14.8317 14.6761 14.8936 14.584 14.9359 14.4825C14.9782 14.381 15 14.2721 15 14.1621C15 14.0521 14.9782 13.9432 14.9359 13.8417C14.8936 13.7402 14.8317 13.6481 14.7536 13.5706ZM1.66613 6.66452C1.66613 5.67593 1.95928 4.70955 2.50851 3.88757C3.05774 3.06558 3.83838 2.42493 4.75172 2.04661C5.66506 1.6683 6.67007 1.56931 7.63966 1.76218C8.60925 1.95504 9.49988 2.43109 10.1989 3.13013C10.898 3.82916 11.374 4.71979 11.5669 5.68938C11.7597 6.65898 11.6607 7.66399 11.2824 8.57732C10.9041 9.49066 10.2635 10.2713 9.44148 10.8205C8.6195 11.3698 7.65311 11.6629 6.66452 11.6629C5.33887 11.6629 4.06751 11.1363 3.13013 10.1989C2.19275 9.26154 1.66613 7.99018 1.66613 6.66452Z" fill="#BEBEBE" />
                                </svg>
                            </div>
                            <div className='InputSearch '>
                                <input className='bg-gray-100 rounded px-8 py-1.5 w-[392px] text-[#B6B6B6]' type="search" placeholder='Quick Search ... ' />
                            </div>
                        </div>
                    </div>
                    <div className='Mune flex gap-10 text-[#B6B6B6]'>
                        <NavLink 
                            to="/Dashboard" 
                            className={({ isActive }) => (isActive ? 'text-blue-500 flex items-center' : 'flex items-center')}>
                            Dashboard
                        </NavLink>
                        <NavLink to="/Dashboard" className="flex items-center">
                            Trainings
                        </NavLink>
                        <NavLink to="/Dashboard" className="flex items-center">
                            Users
                        </NavLink>
                        <NavLink to="/Dashboard" className="flex items-center">
                            More
                        </NavLink>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div>
                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.075 12.6562V12.677L13.0896 12.6916L14.95 14.552V15.4187H0.05V14.552L1.91036 12.6916L1.925 12.677V12.6562V7.96875C1.925 5.09878 3.45165 2.72334 6.10532 2.09239L6.14375 2.08326V2.04375V1.40625C6.14375 0.655739 6.74949 0.05 7.5 0.05C8.25051 0.05 8.85625 0.655739 8.85625 1.40625V2.04375V2.08329L8.89472 2.0924C11.5576 2.72333 13.075 5.10801 13.075 7.96875V12.6562ZM11.25 13.6438H11.3V13.5938V7.96875C11.3 6.79644 10.9431 5.72974 10.2886 4.95523C9.63337 4.17991 8.68189 3.7 7.5 3.7C6.31811 3.7 5.36663 4.17991 4.71142 4.95523C4.05689 5.72974 3.7 6.79644 3.7 7.96875V13.5938V13.6438H3.75H11.25ZM9.32432 16.4562C9.29759 17.437 8.48692 18.2313 7.5 18.2313C6.51308 18.2313 5.70241 17.437 5.67568 16.4562H9.32432Z" fill="#A4A4A4" stroke="white" stroke-width="0.1" />
                        </svg>
                    </div>
                    <div className=''>
                        <img className='w-6 h-6 rounded-full' src={Profile} alt="" />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-8 h-8 rounded-full' src={Profile} alt="" />
                        <div className=' items-center text-xs text-[#6B6B6B]'>
                            <p className='font-bold'>Abdelhaq Nouhi</p>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        //
    );
}

export default NavBar;
