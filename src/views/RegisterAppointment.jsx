import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TableList from '../components/TableList';
import axios from 'axios';
import { Profiler } from 'react';

export default function Register() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const loadAppointments = async () => {
            const appointments = await axios.get("/src/data/appointment.json");
            setAppointments(appointments.data.appointments);
        }
        loadAppointments();
    }, []);


    if (appointments.length === 0) {
        return (<h1>loading</h1>)
    }

    return (
        <main>
            <section>
                <div className="primary__row row justify-content-center">
                    <div className="col-6 m-5">
                        <h1 className="primary__title mb-4">Registro de citas</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mb-5'>
                    <Profiler id="registerAppointment" onRender={onRenderCallback}>
                    <TableList appointments={appointments} />
                    </Profiler>
                </div>
            </section>
        </main >
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