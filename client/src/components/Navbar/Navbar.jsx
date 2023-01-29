import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
// import InboxIcon from "@mui/icons-material/Inbox";
// import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  
  useEffect(() => {
    const token = User?.token
    if (token) {
        const decodedToken = decode(token)
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            handleLogout();
        }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
}, [User?.token, dispatch])

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          {/* <img src={logo} alt="logo" /> */}
          <img src="https://i.ibb.co/sPHrmk6/finallogo.png" alt="logo"  height={"50px"}/>
        </Link>{" "}
        <Link to="/About" className="about ">
          About
        </Link>
        {/* <div class="dropdown">
          <button class="dropbtn">About</button>
          <div class="dropdown-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              veritatis laudantium consequatur sequi necessitatibus molestiae
              expedita doloremque error voluptatibus impedit explicabo dolor
              rem, officiis adipisci quis similique esse est illum.
            </p>
          </div>
        </div> */}
        {/* <Link to='/' className='nav-item nav-btn nav-active'>Products</Link> 
        <Link to='/' className='nav-item nav-btn'>For Teams</Link> */}
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        {User === null ? (
          <>
            <Link to="/Auth" className="nav-item nav-links ">
              Log in
            </Link>
          </>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="12px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <Avatar px="10px" py="7px"></Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
        {/* <InboxIcon /> */}
        <svg
          aria-hidden="true"
          class="svg-icon iconStackExchange"
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="rgba(0,0,0,0.5)"
          style={{
            cursor: "pointer",
            margin: "0 10px",
          }}
        >
          <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
