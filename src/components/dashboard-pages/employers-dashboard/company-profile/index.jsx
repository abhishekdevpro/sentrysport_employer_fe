// import MobileMenu from "../../../header/MobileMenu";
// import DashboardHeader from "../../../header/DashboardHeader";
// import LoginPopup from "../../../common/form/login/LoginPopup";
// import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
// import BreadCrumb from "../../BreadCrumb";
// import SocialNetworkBox from "./components/SocialNetworkBox";
// import CopyrightFooter from "../../CopyrightFooter";
// import MenuToggler from "../../MenuToggler";

// const index = () => {
//   return (
//     <div className="page-wrapper dashboard">
//       <span className="header-span"></span>
//       {/* <!-- Header Span for hight --> */}

//       <LoginPopup />
//       {/* End Login Popup Modal */}

//       <DashboardHeader />
//       {/* End Header */}

//       <MobileMenu />
//       {/* End MobileMenu */}

//       <DashboardEmployerSidebar />
//       {/* <!-- End User Sidebar Menu --> */}

//       {/* <!-- Dashboard --> */}
//       <section className="user-dashboard">
//         <div className="dashboard-outer">
//           <BreadCrumb title="Company Profile" />
//           {/* breadCrumb */}

//           <MenuToggler />
//           {/* Collapsible sidebar button */}
//           <div className="row">
//             <div className="col-lg-12">
//               {/* <!-- Ls widget --> */}
//               <div className="ls-widget">
//                 <div className="tabs-box">
//                   <div className="widget-title">
//                     <h4>Company Profile</h4>
//                   </div>

//                   <div className="widget-content">
//                     <SocialNetworkBox />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End dashboard-outer */}
//       </section>
//       {/* <!-- End Dashboard --> */}

//       <CopyrightFooter />
//       {/* <!-- End Copyright --> */}
//     </div>
//   );
// };

// export default index;
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import SocialNetworkBox from "./components/SocialNetworkBox";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import CompanyDetail from "./components/CompanyDetail";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const index = () => {
  const [companyDetails, setCompanyDetails] = useState([
    {
      id: uuidv4(),
      title: "",
      description: "",
      logo: "",
    },
  ]);
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardEmployerSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Company Profile" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Company Profile</h4>
                    <IoMdAddCircle
                      size={28}
                      className="text-green-600 cursor-pointer"
                      onClick={() => {
                        setCompanyDetails([
                          ...companyDetails,
                          {
                            id: uuidv4(),
                            title: "",
                            description: "",
                            logo: "",
                          },
                        ]);
                      }}
                      title="add more"
                    />
                  </div>

                  <div className="widget-content">
                    <form className="default-form gap-4">
                      {companyDetails?.map((detail, index) => (
                        <CompanyDetail
                          key={detail?.id}
                          length={companyDetails.length}
                          detail={detail}
                          companyDetails={companyDetails}
                          setCompanyDetails={(data) => setCompanyDetails(data)}
                        />
                      ))}
                    </form>
                    <SocialNetworkBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
  );
};

export default index;
