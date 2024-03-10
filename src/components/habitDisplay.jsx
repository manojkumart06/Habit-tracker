import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HabitDetails from './habitDetails';
import './habitDisplay.css'; // Ensured the path is correct

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);

  return (
    <div className='mt-4'>
      {habits.map((habit, index) => (
        <Card key={index} className='mb-3 rounded'>
          <Card.Body>
            <Card.Title>
              <strong className="strong-title">{habit.title}</strong>
            </Card.Title>
            <Card.Text>
              <i className="italic-description">{habit.description}</i>
            </Card.Text>
            <HabitDetails key={habit.title} habit={habit} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default HabitDisplay;
