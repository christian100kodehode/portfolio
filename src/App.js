import "./App.css";
import Info from "./Pages/Info";
import Arbeid from "./Pages/Arbeid";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Arbeid />
      <Footer />
      {/* Add a route for anything wrong entered, instead of showing an error we go to top of page */}
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="*" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
