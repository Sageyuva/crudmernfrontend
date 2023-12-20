import React from 'react';
import './card.css';
import axios from 'axios';
import {Link} from "react-router-dom"

export const TodoCard = (props) => {
  const id = props.id;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/deletetodo/${id}`)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cardmain">
        <h1 className="heading">{props.heading}</h1>
        <p className="caption">{props.caption}</p>
        <div className="buttons">
          <Link to={`/update/${id}`}><button className="edit">Edit</button></Link>

          <button onClick={handleDelete} className="del">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};