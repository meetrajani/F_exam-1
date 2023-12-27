import React, { useEffect, useState } from "react";
import Nev from "./Nev";

import axios from "axios";
import { Link } from "react-router-dom";

const Prodact = () => {

  // sow data

  const [data, setdata] = useState([]);

  useEffect(() => {
    Gdata()
  }, []);

  const Gdata = () =>{
    axios.get("http://localhost:3005/posts").then((res) => {
      setdata(res.data);
    });
  }

  // post data

  const [Fdata,setFdata] = useState([])

  const chang = (e) =>{
    setFdata({...Fdata,[e.target.name]:e.target.value})
  }

  const Submit = () =>{
    axios.post(`http://localhost:3005/posts/`,Fdata).then((res)=>{
      Gdata()
    })
  }

  // delete data

  const Deletedata = (id) =>{
    axios.delete(`http://localhost:3005/posts/${id}`).then((res)=>{
      const deletedata = data.filter((e)=>e.id !== id)
      setdata(deletedata)
    })
  }

  return (
    <div>
      
      <Nev />
      <input type="text" className="m-3 " onChange={chang} name="producetName" placeholder="ProducetName" />
      <input type="text" className="m-3 " onChange={chang} name="ditel" placeholder="ditel" />
      <input type="text" className="m-3 " onChange={chang} name="Price" placeholder="Price" />
      <button className="btn btn-primary" onClick={Submit}>Submit</button>

      {/* Sow data */}

      <div>
        <div className="row">
          {data.map((i, index) => {
            return (
              <div
                key={index}
                className="col-4 card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{index + 1}</h5>
                  <p className="card-text">{i.producetName}</p>
                  <p className="card-text">{i.ditel}</p>
                  <p className="card-text">{i.Price}</p>
                  <a href="#"></a>
                  <Link className="btn btn-info" to={`/${i.id}`}>
                    Producet sow
                  </Link>
                  <button className="btn btn-danger mx-1" onClick={()=>Deletedata(i.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prodact;
