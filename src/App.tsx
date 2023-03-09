import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, ScrollTop } from "./components";
import { Course, Courses, Home } from "./pages";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
