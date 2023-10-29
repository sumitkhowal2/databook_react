import React from "react";
import {Link} from 'react-router-dom';
import shahrukh from '../assets/Bollywood/Shah Rukh Khan.jpg';

function Bollywood() {
  return (
    <div className="container">
      <div className="card mx-3 mt-3" style={{ width: "250px" }}>
        <img src={shahrukh} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">Shah Rukh Khan</h4>
          <p className="card-text">Shah Rukh Khan was born on November 02, 1965 in New Delhi to Meer Taj Mohammed Khan & Lateef Fatima Khan. He also has an elder sister, Shehnaz Lalarukh. He spent his early days in Bangalore with his grandparents.</p>
          <Link to="https://www.imdb.com/name/nm0451321/" className="btn btn-info">
            See Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bollywood;
