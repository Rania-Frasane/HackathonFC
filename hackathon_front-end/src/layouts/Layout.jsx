import React, { useState, useEffect, useContext, createContext } from "react";
import { Outlet, useNavigate ,Link} from "react-router-dom";
import Sidebar, {  SidebarItem } from "../pages/SideBar/SideBar.jsx";
import { FaFilm } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { LayoutDashboard, Settings } from "lucide-react";
import { TbCertificate } from "react-icons/tb";
import { BiCommentError } from "react-icons/bi";
import NavBar from "../pages/NavBar/navBar.jsx";
import "../index.css";


export const SidebarContext = createContext();


function Layout() {
  const [expanded, setExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");


  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const [authenticated, setAuthenticated] = useState(false); // État d'authentification
  // const { expanded } = useContext(SidebarContext);

  useEffect(() => {
    // Vérifiez si l'utilisateur est déjà authentifié lors du chargement de la page
    const isUserAuthenticated = localStorage.getItem("authenticated");
    if (isUserAuthenticated === "true") {
      setAuthenticated(true);
    }
  }, []);

  // Si l'utilisateur n'est pas authentifié, afficher la page de connexion
//   if (!authenticated) {
//     return <Login onLogin={() => setAuthenticated(true)} />;
//   }

  console.log(expanded);
  return (
    <>
      {/* <Login/> */}
      {/* {!authenticated && <Login onLogin={() => setAuthenticated(true)} />}
    {authenticated && ( */}
      <SidebarContext.Provider
        value={{ expanded, setExpanded, selectedItem, handleItemClick }}
      >
        <header>
          <div className="flex">
            <Sidebar>
                <Link to="/Dashboard">
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Dashboard"
                active
              />
              </Link>

              <hr className="my-3" />


              <Link to="/Intervenants">
              <SidebarItem
                icon={<FaUsers size={20}/>}
                text="Intervenants"
              />
              </Link>
              {/* <Link to="/Competences">
              <SidebarItem
                icon={
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                  </svg>
                }
                text="Competences"
              />
              </Link> */}

              <Link to="/certifications">
              <SidebarItem
                icon={<TbCertificate size={20}/>}
                text="Certifications"
              />
              </Link>
              <Link to="/Plans">
              <SidebarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                }
                text="Plans"
              />
              </Link>
              {/* <hr className="my-3" />
              <Link to="/Categories">
              <SidebarItem
                icon={
                  <GiTheater size={20}/>
                }
                text="Salle"
              />
              </Link>
              <Link to="/Dishes">
                <SidebarItem icon={<MdOutlineEventSeat size={20} />} text="Siége" />
              </Link> */}

              <hr className="my-3" />
              <Link to="/Reclamations">
              <SidebarItem
                icon={<BiCommentError size={20} />}
                text="Reclamations"
              />
              </Link>
              {/* <Link to="/Company">
              <SidebarItem
                icon={<Settings size={20} />}
                text="Restaurant Settings"
              />
              </Link> */}
              <Link to="/Profile">
              <SidebarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                }
                text="Profile"
              />
              </Link>

            </Sidebar>

            {/* ${expanded ? "ml-64" : "ml-16"} */}

            <main
              className={` col-span-1 w-full  ${
                expanded ? "ml-64" : "ml-16"
              } transition-all duration-200 `}
            >
                <NavBar/>
              <Outlet />
            </main>
          </div>
        </header>
      </SidebarContext.Provider>
      {/* )} */}
    </>
  );
}

export default Layout;
