import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navabar/Navbar";
import Footer from "./components/Footer/Footer";
import Ieos from "./pages/Ieos/Ieos";
import PresaleSubmission from "./pages/PresaleSubmission/PresaleSubmission";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ieos" element={<Ieos />} />
        <Route path="/presale" element={<PresaleSubmission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
