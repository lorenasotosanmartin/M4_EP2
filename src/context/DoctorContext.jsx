import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const DoctorsContext = createContext();

export function DoctorsProvider  ({ children }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const loadDoctors = async () => {
        const doctors = await axios.get("/src/data/doctors.json");
        setDoctors(doctors.data.doctors);
    }
    loadDoctors();
}, []);

  return (
    <DoctorsContext.Provider value={{ doctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};

export function infoDoctors(){
  const context= useContext(DoctorsContext);
  return context;
}

