import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePages } from "./user/Route/Route";
import DefaultLayout from "./user/Route/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        {RoutePages.map((item, index) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<DefaultLayout>{<item.component />}</DefaultLayout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
