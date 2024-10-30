// Importing React and any necessary components or libraries
import React from 'react';
import './App.css';
import Home from './Components/HomePage';
// Main App component
import Logo from './Components/Logo';
import ContactBar from './Components/ContactBar';
import { Routes,Route, Router, BrowserRouter } from 'react-router-dom';
import Turmeric500 from './Components/products/Turmeric500';
import Navbar from './Components/Navbar';
import Amchur500 from './Components/products/Amchur500';
import RedChilli500 from './Components/products/Redchilli500';
import Coriander500 from './Components/products/Cooriander500';
import Turmeric200 from './Components/products/Turmeric200';
import Coriander200 from './Components/products/Cooriander200';
import RedChilli200 from './Components/products/Redchilli200';
function App() {
  return (
    <>
    <BrowserRouter basename='dspremi'>
    <Logo/>
    <ContactBar/>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dspremium-turmeric-500" element={<Turmeric500 />} />
                <Route path="/dspremium-redchilli-500" element={<RedChilli500 />} />
                <Route path="/dspremium-cooriander-500" element={<Coriander500 />} />
                <Route path="/dspremium-amchur-500" element={<Amchur500 />} />
                <Route path="/dspremium-turmeric-200" element={<Turmeric200 />} />
                <Route path="/dspremium-redchilli-200" element={<RedChilli200 />} />
                <Route path="/dspremium-cooriander-200" element={<Coriander200 />} />
        </Routes>
        </BrowserRouter>
        </>
  );

}

export default App;
