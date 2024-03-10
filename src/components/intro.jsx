import React from "react";
import CreateHabit from "./createHabit";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { deleteHabit } from "../Redux/habitReducer";
import { useDispatch, useSelector } from "react-redux";
import "./intro.css";
import habitImage from "../assets/habit-img.png";

const Introduction = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { habits } = useSelector((state) => state.allHabits);

  // deleteHabit Handler
  const deleteHandler = (name) => {
    dispatch(deleteHabit(name));
  };

  return (
    <>
      <Row>
        <Col md={2} className="icons">
         <img src="https://cdn-icons-gif.flaticon.com/13311/13311729.gif" alt="cal" />
        </Col>
        <Col md={4} className="onMobile">
          <h4>Habits</h4>
        </Col>
      </Row>
      <ListGroup className="list-habits" >
        {habits.map((habit, index) => (
          <ListGroup.Item
            key={index}
            className="gradient mb-1 rounded habit-container"
          >
            <Row>
              <Col md={2} className="icons2">
                {" "}
                <img src="https://cdn-icons-png.flaticon.com/128/3176/3176298.png" alt="todo" />
              </Col>
              <Col md={8} className="habit-title">
                {habit.title}
              </Col>
              <Col md={1} className="icons2">
                <i
                  className="fa-solid fa-trash"
                  style={{color: "#fd0808",fontSize: "12px",cursor:"pointer" }}
                  onClick={() => deleteHandler(habit.title)}
                ></i>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row>
        <Col className="d-flex justify-content-center">
          <Button
            type="button"
            className="mt-3 mobile"
            onClick={() => setModalShow(true)}
          >
            <i className="fa-solid fa-circle-plus"></i> &nbsp;&nbsp; New Habit
          </Button>
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
      <div className="habit-img">
          <img src={habitImage} alt="habit-img" />
      </div>
    </>
  );
};

export default Introduction;