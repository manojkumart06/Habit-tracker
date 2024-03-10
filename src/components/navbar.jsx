import { Nav, Container } from "react-bootstrap";
import './navbar.css'

const Navbar = () => {
  const date = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week
  const dayOfMonth = date.getDate().toString().padStart(2, '0'); // Get the day of the month (zero-padded)
  const year = date.getFullYear(); // Get the year

  return (
    <Nav className="p-2 background">
      <Container className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold title">Habit Tracker</h3>
        <span className="currDate img-container">
        Today : {dayOfWeek} {dayOfMonth} {year}
        <img src="https://cdn-icons-png.flaticon.com/128/4310/4310163.png" alt="" />
      </span>
      </Container>
    </Nav>
  );
};

export default Navbar;
