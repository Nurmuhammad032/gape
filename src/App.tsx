import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, ScrollTop } from "./components";
import { Courses, Home } from "./pages";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
