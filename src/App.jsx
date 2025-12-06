import React from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/account-checker" element={<AccountChecker />} />
        <Route path="/profile-analysis" element={<ProfileAnalysis />} />
        <Route path="/account-verification" element={<AccountVerification />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

