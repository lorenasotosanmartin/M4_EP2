import DoctorCard from '../components/DoctorCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {infoDoctors} from '../context/DoctorContext'
import { Profiler } from 'react';

export default function Services() {

    const {doctors} = infoDoctors();
    if (doctors.length === 0) {
        return (<h1>loading</h1>)
    }

    return (
        <main>
            <section className="section_primary py-5" tabIndex="0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="mb-4">Excelencia profesional</h1>
                            <p className="text-body-secondary">Nuestra clínica está comprometida con brindar un
                                servicio de calidad a
                                nuestro pacientes, es por esto, que contamos con una amplia gama de profesionales
                                capacitados y
                                dispuestos a brindar la mejor atención a cada uno de nuestros pacientes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards my-5" tabIndex="0">
                <div className="container">
                    <h2 className="mb-5">Conoce a nuestro equipo de profesionales</h2>
                    <div className="row">
                        {doctors.map((doctor, index) => (
                            <div className='col-md-6 col-lg-3' key={index} >
                                <Profiler id="DoctorCard" onRender={onRenderCallback}>
                                <DoctorCard  key={index} doctor={doctor} />
                                </Profiler>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    endTime,
  ) {
    console.log(`Profiler: ${id},\n fase: ${phase},\n Duración actual: ${actualDuration},\n Duración base: ${baseDuration},\n inicio: ${startTime},\n fin: ${endTime}`);
  }