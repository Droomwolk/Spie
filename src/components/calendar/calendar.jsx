import { useState } from 'react';
import Calendar from 'react-calendar';

// import 'react-calendar/dist/Calendar.css';

function Calendrier() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [appointmentName, setAppointmentName] = useState('');

  const addAppointment = () => {
    setAppointments([...appointments, { date, name: appointmentName }]);
    setAppointmentName('');
  };

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <div className='appointment-form'>
        <input 
          type="text" 
          value={appointmentName} 
          onChange={(e) => setAppointmentName(e.target.value)} 
          placeholder="Rendez-vous" 
          required 
        />
        <button onClick={addAppointment}>Add Appointment</button>
      </div>
      <AppointmentTable appointments={appointments} />
    </div>
  );
}

function AppointmentTable({ appointments }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, i) => (
          <tr key={i}>
            <td>{appointment.name}</td>
            <td>{appointment.date.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendrier;