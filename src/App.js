import Navbar from "./components/navbar";
import Introduction from "./components/intro";
import HabitDisplay from "./components/habitDisplay";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import './App.css';

import Typed from "typed.js";

function App() {
  // code for typed.js library
  useEffect(() => {
    const typed = new Typed(".tag", {
      strings: [
        "The secret of your future is hidden in your daily routine.",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "Small habits make a big difference.",
        "Habit is the intersection of knowledge (what to do), skill (how to do), and desire (want to do).",
        "The difference between who you are and who you want to be is what you do.",
        "Habits are the compound interest of self-improvement.",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5">
          <Col md={3}>
            {/* Overview component */}
            <Introduction />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <h4 className="d-flex  mt-5  justify-content-center">
          <span className="tag"></span>
        </h4>
      </Container>
      <p> <strong>Copyright@2024 ~Manoj</strong></p>
    </>
  );
}

export default App;
