import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeStatus } from "../Redux/habitReducer";
import "./habitDetails.css";

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch();
  const [doneCount, setDoneCount] = useState(0);

  // Function to calculate initial done count
  useEffect(() => {
    let initialDoneCount = 0;
    details.forEach((detail) => {
      if (detail.status === "done") {
        initialDoneCount++;
      }
    });
    setDoneCount(initialDoneCount);
  }, [details]);

  // handlers to change status on click
  const checkStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "done",
          },
        ],
      })
    );
    setDoneCount(doneCount + 1); // Increment done count
  };

  const doneStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "fail",
          },
        ],
      })
    );
    setDoneCount(Math.max(0, doneCount - 1)); // Decrement done count, ensure it doesn't go below 0
  };

  const failStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "none",
          },
        ],
      })
    );
  };

  return (
    <>
    <Row>
      {details.map((detail) => (
        <Fragment key={detail.day}>
          <Col>
            <p className="day-headings">
              {detail.day}
              {detail.date}
            </p>

            {detail.status === "none" && (
              <i
                className="icon fa-solid fa-circle-minus null"
                onClick={() => checkStatusHandler([habit.title, detail.day])}
              ></i>
            )}

            {detail.status === "done" && (
              <i
                className="icon fa-lg fa-solid fa-circle-check done"
                onClick={() => doneStatusHandler([habit.title, detail.day])}
              ></i>
            )}

            {detail.status === "fail" && (
              <i
                className="icon fa-lg fa-solid fa-circle-xmark fail"
                onClick={() => failStatusHandler([habit.title, detail.day])}
              ></i>
            )}
          </Col>
        </Fragment>
      ))}
    </Row>
      <Row>
      <p className="day-completed">Completed <strong>{doneCount}</strong>/{details.length} days 🏁</p>
    </Row>
    </>
  );
};

export default HabitDetails;
