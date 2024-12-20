import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MatchForm from "./components/MatchForm";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match" element={<MatchForm />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
