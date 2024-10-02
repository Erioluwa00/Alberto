import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact/Contact';
import Support from './Components/Support/Support'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/galleries" element={<Gallery />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/technology" element={<Technology />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App
