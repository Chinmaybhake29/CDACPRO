import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentRegistration from "./components/Student/StudentRegistration";
import ForgetPassword from "./components/ForgetPassword";
import AdminDashboard from "./components/company/AdminDashboard";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import About from "./components/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "loginpage",
        element: <Login />,
      },
      {
        path: "registerpage",
        element: <Register />,
      },
      {
        path: "forgotpasswordpage",
        element: <ForgetPassword />,
      },
      {
        path: "Contactpage",
        element: <ContactUs />,
      },
      {
        path: "studentpage",
        element: <StudentDashboard />,
      },
      {
        path: "studentRegpage",
        element: <StudentRegistration />,
      },
      {
        path: "admingpage",
        element: <AdminDashboard />,
      },
      {
        path: "employeepage",
        element: <EmployeeDashboard />,
      },
      {
        path: "aboutpage",
        element: <About />,
      },
      
    ],
  },
]);

export default router;
