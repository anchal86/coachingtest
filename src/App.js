import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components';
import { Home, Contact} from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
