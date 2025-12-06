import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import AccountChecker from "./components/AccountChecker";
import ProfileAnalysis from "./components/ProfileAnalysis";
import AccountVerification from "./components/AccountVerification";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/age-checker" element={<AccountChecker />} />
          <Route path="/tools/profile-analysis" element={<ProfileAnalysis />} />
          <Route path="/tools/verification" element={<AccountVerification />} />
          <Route
            path="/tools/bulk-analysis"
            element={<div>Bulk Analysis (TODO)</div>}
          />
          <Route path="/blogs" element={<div>Blogs (TODO)</div>} />
          <Route path="/platforms" element={<div>Platforms (TODO)</div>} />
          <Route path="/contact" element={<div>Contact (TODO)</div>} />
          <Route path="/privacy" element={<div>Privacy Policy (TODO)</div>} />
          <Route path="/terms" element={<div>Terms of Service (TODO)</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
