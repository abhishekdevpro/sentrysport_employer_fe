import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import employerMenuData from "../../data/employerMenuData";
import { profileMenu } from "../../data/employerMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import logo from "../../Images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Constant } from "@/utils/constant/constant";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userInfo = JSON.parse(localStorage.getItem(Constant.USER_INFO));
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  // console.log(userInfo);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-shaddow z-10 ${
        navbar ? "fixed-header " : ""
      }`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="me-10">
                <Link to="/">
                  <img
                    alt="brand"
                    src={logo}
                    className="h-20 w-28 object-cover"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <button
              className="menu-btn"
              onClick={() => {
                navigate("/employers-dashboard/shortlisted-canidates");
              }}
            >
              <span className="count">1</span>
              <span className="icon la la-heart-o"></span>
            </button>
            {/* wishlisted menu */}

            {/* <button className="menu-btn">
              <span className="icon la la-bell"></span>
            </button> */}
            {/* End notification-icon */}

            {/* <!-- Dashboard Option --> */}
            <div className="dropdown dashboard-option">
              <a
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  alt="avatar"
                  className="thumb h-[20px] w-[20px] "
                  src="/images/resource/company-6.png"
                />
                {/* <span className="name">My Account</span> */}
              </a>

              <ul className="dropdown-menu">
                <div className="bg-slate-600 text-white w-full p-2 rounded-md">
                  <p className="text-white">
                    {userInfo?.first_name + " " + userInfo?.last_name}{" "}
                  </p>
                  <p className="mb-2 text-white">{userInfo?.email} </p>
                </div>

                {profileMenu.map((item) => (
                  <li
                    className={`${
                      isActiveLink(item.routePath, pathname) ? "active" : ""
                    } mb-1 mt-2`}
                    key={item.id}
                  >
                    <Link to={item.routePath}>
                      <i className={`la ${item.icon}`}></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* End dropdown */}
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
