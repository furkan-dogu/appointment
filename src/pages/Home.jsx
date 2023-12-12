import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
// import { appointmentData } from "../helper/data";

const Home = () => {
  // const [appointments, setAppointments] = useState(appointmentData)
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem("list")) || []);

  const handleAdd = (newAppointments) => {
    setAppointments([...appointments, newAppointments]);
    localStorage.setItem("list", JSON.stringify([...appointments, newAppointments]))
  };

  const handleDelete = (id) => {
    const filteredList = appointments.filter((item) => item.id !== id);
    setAppointments(filteredList);
    localStorage.setItem("list", JSON.stringify(filteredList))
  };

  const handleDoubleClick = (id) => {
    const dbConsulted = appointments.map((item) => (item.id === id ? {...item, consulted: !item.consulted} : item))
    setAppointments(dbConsulted)
    localStorage.setItem("list", JSON.stringify(dbConsulted))
  };
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">FURKAN HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};

export default Home;
