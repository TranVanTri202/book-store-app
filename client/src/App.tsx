import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { jwtDecode } from "jwt-decode";

import { RouteUser, RouteAdmin } from "./Routes/Route";
import LayoutUser from "./Layouts/LayoutUser";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import Page404 from "./user/pages/Page404";

function App() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token) as { role: string };
      setUserRole(decodedToken.role);
    }
  }, [userRole]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default redirect based on userRole */}
        <Route
          path="/"
          element={
            userRole === "admin" ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <Navigate to="/Home" />
            )
          }
        />

        {/* Routes for User */}
        {(userRole === "user" || !userRole) &&
          RouteUser.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<LayoutUser>{<item.component />}</LayoutUser>}
            />
          ))}

        {/* Routes for Admin */}
        {userRole === "admin" &&
          RouteAdmin.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<LayoutAdmin>{<item.component />}</LayoutAdmin>}
            />
          ))}

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
