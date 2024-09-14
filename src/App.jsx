import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Header4 from "./components/Header4";
import Header5 from "./components/Header5";
import Header6 from "./components/Header6";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the root ("/") displaying all headers */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Header2 />
              <Header3 />
              <Header4 />
              <Header5 />
              <Header6 />
            </div>
          }
        />

        {/* Route for "/test" displaying the Test component */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
