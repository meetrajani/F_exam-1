import React, { useEffect, useState } from "react";
import Nev from "./Nev";
import { useParams } from "react-router-dom";
import axios from "axios";

const About = () => {

  const { id } = useParams();
  const [data, setdata] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3005/posts").then((res) => {
    console.log(res.data);
    setdata(res.data);
  });
  },[])

  const Filterdata = data.filter((e) => e.id === Number(id));

  const Closspage = () =>{
    window.location.href="/Prodact";
  }

  return (
    <div>
      <Nev />
      {Filterdata.map((i, index) => {
        return (
          <div key={index} className="col-4 card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{i.id}</h5>
              <p className="card-text">{i.producetName}</p>
              <p className="card-text">{i.ditel}</p>
              <p className="card-text">{i.Price}</p>
              <button className="btn btn-secondary" onClick={Closspage}>Closs</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
