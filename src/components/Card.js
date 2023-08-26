import React from "react";
// import pic from '../assets/testiamge.jpg';
import './Card.css';

const Card = (props) => {
   const { item } = props;
  // console.log(data);
  return (
    <div className="main-container">
      <div className="card">
        
        <img src={item.poster_path} className="poster" alt="pic not avl" loading="lazy"/>
        <div className="card-body ">
          <p className="card-text mb-0">{item.title}</p>
          <p>{item.vote_average}</p>
          
        </div>
        <div>
        <p className="description">Description: {item.overview}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
