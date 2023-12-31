import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import SearchForm from './SearchForm';
import '../../Css/Header.css'
import { RiPencilFill } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { BsBookmarks } from 'react-icons/bs'
import SkeletonElement from '../Skeletons/SkeletonElement';
import { AuthContext } from '../../Context/AuthContext';
import { FiArrowLeft } from 'react-icons/fi';

const Header = () => {
    const location=useLocation().pathname
    const bool = localStorage.getItem("authToken") ? true : false
    const [auth, setAuth] = useState(bool)
    const { activeUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setAuth(bool)
        setTimeout(() => {
            setLoading(false)
        }, 1600)

    }, [bool])


    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/blog')
    };

    return (

        <header >
            <div className="averager" >
            {location==='/blog'?<Link to={'/'}>
                <FiArrowLeft style={{color:"rgba(48,86,81,255)",fontSize:"1.5rem"}}/>
            </Link>:""}
                <Link to="/blog" className="logo ms-5">
                    <h5>
                        KODERSHUB

                    </h5>
                </Link>
                {/* <SearchForm /> */}
                <div className='header_options ms-auto'>

                    {auth ?
                        <div className="auth_options">


                            <Link className='addStory-link' to="/addstory"><RiPencilFill /> Add Story </Link>


                            {/* <Link to="/readList" className='readList-link'>
                                <BsBookmarks />
                                <span id="readListLength">
                                    {activeUser.readListLength}
                                </span>
                            </Link> */}
                            <div className='header-profile-wrapper '>


                                {loading ? <SkeletonElement type="minsize-avatar" />

                                    :

                                    <img src={`${activeUser.profileImg}`} alt={activeUser.fullName} />

                                }


                                <div className="sub-profile-wrap  ">
                                    <Link className='profile-link' to="/profile"  > <FaUserEdit />  Profile </Link>

                                    <button className='logout-btn' onClick={handleLogout}> <BiLogOut />  Logout</button>

                                </div>

                            </div>


                        </div>

                        :
                        <div className="noAuth_options">

                            

                            <Link className='register-link' to="/login">Login</Link>
                        </div>

                    }
                </div>

            </div>

        </header>

    )
}

export default Header;
