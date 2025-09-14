import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import RoundButton from './components/RoundButton';

const reviewer = [
  {
    name: "John Doe",
    review: "This is a fantastic product! Highly recommended.",
    img: "./assests/reviewer1.svg"
  },
  {
    name: "Jane Smith",
    review: "Good value for money. Will buy again.",
    img: "./assests/reviewer2.svg"
  },
  {
    name: "Alice Johnson",
    review: "Average quality, but decent for the price.",
    img: "./assests/reviewer3.svg"
  },
  {
    name: "Bob Brown",
    review: "Exceeded my expectations! Five stars.",
    img: "./assests/reviewer4.svg"
  },
  {
    name: "Charlie Davis",
    review: "Not satisfied with the product. Could be better.",
    img: "./assests/reviewer5.svg"
  },
  {
    name: "Eva Green",
    review: "Amazing experience! Will recommend to friends.",
    img: "./assests/reviewer1.svg"
  }
];

function App() {
  return (<>
    <Nav />
    <RoundButton label="-" color="red" />
    <RoundButton label="+" color="green" />

  </>);
}

export default App;
