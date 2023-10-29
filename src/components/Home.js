import React from "react";
import s1 from "../assets/DSC_7329-01.jpeg";
import s2 from "../assets/DSC_7331-01.jpeg";
import s3 from "../assets/DSC_7385-01-01 (1).jpg";
import s4 from "../assets/DSC_7791-01-01.jpeg";
import "../App.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="card mx-3 mt-3" style={{ width: "250px" }}>
          <img src={s1} alt="Card" />
          <div className="card-body">
            <h4 className="card-title">Sumit Khowal</h4>
            <p className="card-text">This is Sumit Khowal From MCA</p>
            <Link to="/" className="btn btn-info">
              See Profile
            </Link>
          </div>
        </div>
        <div className="card mx-3 mt-3"  style={{ width: "250px" }}>
          <img src={s2} alt="Card " />
          <div className="card-body">
            <h4 className="card-title">Sumit Khowal</h4>
            <p className="card-text">This is Sumit Khowal From MCA</p>
            <Link to="/" className="btn btn-primary">
              See Profile
            </Link>
          </div>
        </div>
        <div className="card mx-3 mt-3"  style={{ width: "250px" }}>
          <img src={s3} alt="Card " />
          <div className="card-body">
            <h4 className="card-title">Sumit Khowal</h4>
            <p className="card-text">This is Sumit Khowal From MCA</p>
            <a href="/" className="btn btn-danger">
              See Profile
            </a>
          </div>
        </div>
        <div className="card mx-3 mt-3" style={{ width: "250px" }}>
          <img src={s4} alt="Card " />
          <div className="card-body">
            <h4 className="card-title">Sumit Khowal</h4>
            <p className="card-text">This is Sumit Khowal From MCA</p>
            <a href="/" className="btn btn-success">
              See Profile
            </a>
          </div>
        </div>
        <div className="card mx-3 mt-3" style={{ width: "250px" }}>
          <img src={s4} alt="Card " />
          <div className="card-body">
            <h4 className="card-title">Sumit Khowal</h4>
            <p className="card-text">This is Sumit Khowal From MCA</p>
            <a href="/" className="btn btn-secondary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card mx-3 mt-3" style={{ width: "250px" }}>
          <img src={s4} alt="Card " />
          <div className="card-body">
            <h4 className="card-title">Sumit Khowal</h4>
            <p className="card-text">This is Sumit Khowal From MCA</p>
            <a href="/" className="btn btn-warning">
              See Profile
            </a>
          </div>
        </div>
         <div className="card mx-3 mt-3" style={{ width: "250px" }}>
         <img src={s4} alt="Card " />
         <div className="card-body">
           <h4 className="card-title">Sumit Khowal</h4>
           <p className="card-text">This is Sumit Khowal From MCA</p>
           <a href="/" className="btn btn-dark">
             See Profile
           </a>
         </div>
       </div>
        <div className="card mx-3 mt-3" style={{ width: "250px" }}>
        <img src={s4} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">Sumit Khowal</h4>
          <p className="card-text">This is Sumit Khowal From MCA</p>
          <a href="/" className="btn btn-danger">
            See Profile
          </a>
        </div>
      </div>
       <div className="card mx-3 mt-3" style={{ width: "250px" }}>
       <img src={s4} alt="Card " />
       <div className="card-body">
         <h4 className="card-title">Sumit Khowal</h4>
         <p className="card-text">This is Sumit Khowal From MCA</p>
         <a href="/" className="btn btn-success">
           See Profile
         </a>
       </div>
     </div>
      </div>
    </>
  );
}
