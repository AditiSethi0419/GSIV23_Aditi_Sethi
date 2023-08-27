import React from "react";
import './Card.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";


const Card = (props) => {
   const { item } = props;
   
  return (
    <div className="main-container">
      <Link to={`/${item.id}`}>
      <div className="card">
      <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            className="poster" 
              alt="img cover"
            />
        {/* <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="poster" alt="pic not avl" loading="lazy"/> */}
        <div className="card-body ">
          <p className="card-text mb-0">{item.title}</p>
          <p>({item.vote_average})</p>
          
        </div>
        <div>
        <p className="description">Description: {item.overview}</p>
        </div>
       
      </div>
      </Link>
    </div>
  );
};

export default Card;
