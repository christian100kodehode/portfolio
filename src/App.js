import "./App.css";
import Info from "./Pages/Info";
import Arbeid from "./Pages/Arbeid";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import "typeface-roboto";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Arbeid />

      {/* <Routes>
        <Route path="/" element={<Arbeid />} />
        <Route path="Arbeid" element={<Arbeid />} />
        <Route path="Info" element={<Info />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
