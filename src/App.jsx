import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Services from './views/Services';
import Contact from './views/Contact';
import RegisterAppointment from './views/RegisterAppointment';
import Appointment from './views/Appointment';
import { DoctorsProvider } from './context/DoctorContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DoctorsProvider> 
    <Router>
    <Header/>
      <Routes>
        <Route path="*" element ={<Home/>} />
        <Route path="/home" element ={<Home/>} />
        <Route path="/services" element ={<Services/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/registerAppointment" element ={<RegisterAppointment/>} />
        <Route path="/appointment" element ={<Appointment/>} />
      </Routes>
     <Footer/>
     </Router>
     </DoctorsProvider> 
    </>
  );
}

export default App;  

