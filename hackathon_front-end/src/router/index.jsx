import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import DashboardPage from "../pages/dashboard/page";
import Authentication from '../Auth/Authentication'
import Signup from '../Auth/Signup'
import Films from "../pages/Film/page";
import Component from "../ClientSide/Navbar";
import MainLayout from "../ClientSide/MainLayout";
import Services from "../ClientSide/Services";
import Header from "../ClientSide/Header";
import Formation from "../ClientSide/Formation";
import Competences from "../pages/competences/page";
import Certifications from "../pages/certifications/page";
import Reclamations from "../pages/Reclamations/page";
import DashboardProfile from "../pages/Proofile/page";
import Signupp from '../Auth/Signup copy'
import Plans from "../pages/Plans/page";
export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/Login",
        element: <Authentication />,
        // children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "/SignUP",
        element: <Signup />,
        // children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "/SignUPp",
        element: <Signupp />,
        // children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "/Dashboard",
        element: <Layout />,
        children: [{ index: true, element: <DashboardPage /> }],
      },
      {
        path: "/Intervenants",
        element: <Layout />,
        children: [{ index: true, element: <Films /> }],
      },
      {
        path: "/Competences",
        element: <Layout />,
        children: [{ index: true, element: <Competences /> }],
      },
      {
        path: "/certifications",
        element: <Layout />,
        children: [{ index: true, element: <Certifications /> }],
      },
      {
        path: "/plans",
        element: <Layout />,
        children: [{ index: true, element: <Plans /> }],
      },
      {
        path: "/plans",
        element: <Layout />,
        children: [{ index: true, element: <Plans /> }],
      },
      {
        path: "/Reclamations",
        element: <Layout />,
        children: [{ index: true, element: <Reclamations /> }],
      },
      {
        path: "/Profile",
        element: <Layout />,
        children: [{ index: true, element: <DashboardProfile /> }],
      },
      {
        path: "/NavBar",
        element: <Component />,
      },


    ],
  },
  {
    path: "/client",
    element: <MainLayout />, // Apply MainLayout to the client-specific routes
    children: [
      {
        path: "/client",
        element: <Header />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "formation",
        element: <Formation />,
      },
      //   {
      //     path: "Services/:id", // Dynamic route for service details
      //     element: <ServiceDetail />,
      //   },
    ],
  },
]);
