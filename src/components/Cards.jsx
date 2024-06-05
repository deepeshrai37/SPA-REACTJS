import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="card " style={{ width: '27rem',height:'27rem',border:'solid',padding:'2px 3px' }}>
      <img src='src\assets\react.svg' className="card-img-top imagecard" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.body}</p>
        <a href={item.link} className="btn btn-primary">Know More</a>
      </div>
    </div>
  );
}

export default Cards;