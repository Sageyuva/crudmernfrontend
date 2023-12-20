import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoCard } from './TodoCard';
import './home.css';

const HomeTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getitems')
      .then((results) => {
        console.log(results);
        setTodos(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="divbtn">
        <Link to="/create" className="">
          <button className="bttn">Add</button>
        </Link>
      </div>

      {todos.map((todoo) => (
        <div className="cardHome" key={todoo._id}>
          <TodoCard heading={todoo.heading} caption={todoo.caption} id={todoo._id} />
        </div>
      ))}
    </div>
  );
};

export default HomeTodo;