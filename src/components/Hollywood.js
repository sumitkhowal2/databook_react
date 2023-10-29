import React from 'react'
import { Link } from 'react-router-dom';
import morgan from '../assets/Hollywood/Morgan Freeman.jpg';
import leonardo from '../assets/Hollywood/Leonardo DiCaprio.jpg';
function Hollywood() {
  return (
    <div className="container">
        <div className="card mx-3 mt-3" style={{ width: "250px" }}>
          <img src={morgan} alt="Card" />
          <div className="card-body">
            <h4 className="card-title">Morgan Freeman</h4>
            <p className="card-text">With an authoritative voice and calm demeanor, this ever popular American actor has grown into one of the most respected figures in modern US cinema.</p>
            <Link to="https://www.imdb.com/name/nm0000151/" className="btn btn-info">
              See Profile
            </Link>
          </div>
        </div>
        <div className="card mx-3 mt-3"  style={{ width: "250px" }}>
          <img src={leonardo} alt="Card " />
          <div className="card-body">
            <h4 className="card-title">Leonardo DiCaprio </h4>
            <p className="card-text">Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies..</p>
            <Link to="https://www.imdb.com/name/nm0000138/" className="btn btn-primary">
              See Profile
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hollywood