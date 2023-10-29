import React from 'react'
import {Link} from 'react-router-dom'
import mohanlal from '../assets/Tollywood/Mohanlal.jpg'
function Tollywood() {
  return (
    <div className='container'>
    <div className="card mx-3 mt-3" style={{ width: "250px" }}>
        <img src={mohanlal} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">Mohanlal</h4>
          <p className="card-text">Mohanlal was born to Viswanathan Nair (father) and Santhakumari (mother) in the Pathanamthitta district of Kerala, which is located in the southern part of India on the 21st May 1960. </p>
          <Link to="https://www.imdb.com/name/nm0482320/" className="btn btn-info">
            See Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Tollywood

