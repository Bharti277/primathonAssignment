import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

function Home() {
  const [data, setData] = useContext(DataContext);
  const [names, setNames] = useState([]);

  const homeStyle = {
    color: "black",
    backgroundColor: "#ccc",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "100%",
    // position: "relative",
    // top: "76px",
  };

  const nameStyle = {
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "rgba(218, 251, 237, 0.5)",
    borderRadius: "12px",
    border: "3px solid black",
    width: "500px",
    textAlign: "center",
    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3)",
    fontSize: "20px",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(data);
    const items = await res.json();
    // console.log(items.results)
    setNames(items.results);
  };

  return (
    <React.Fragment>
    <div style={{position:"relative", top:"80px"}}>
    <span><h1>Welcome to Home Page</h1></span>
      <div style={homeStyle}>
        {names.map((item) => (
          <div key={item.login.uuid} style={nameStyle}>
            <img src={item.picture.large} alt="Profile Picture" />
            <div>
              <b>Name:</b> {item.name.title} {item.name.first} {item.name.last}
            </div>
            <div>
              <b>D.O.B.:</b> {item.dob.date}, <b>Age:</b> {item.dob.age}
            </div>
            <div><b>Gender:</b> {item.gender}</div>
            <div><b>Email:</b> {item.email}</div>
            <div>
              <b>Country:</b> {item.location.country} {item.name.last}
            </div>
          </div>
        ))}
      </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
