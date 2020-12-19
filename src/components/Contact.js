import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";

function Contact() {
  const [data, setData] = useContext(DataContext);
  const [items, setItems] = useState([]);

  const contactStyle = {
    color: "black",
    backgroundColor: "#ccc",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(data);
    const items = await res.json();
    console.log(items.results);
    setItems(items.results);
  };

  return (
    <div style={{position:"relative", top:"80px"}}>
      <h1>Welcome to Contact Page</h1>
      <div className="contact" style={contactStyle}>
        {items.map((item) => (
            <div key={item.login.uuid} className="contact-details">
          <p key={item.email}>
            Email Id: {item.email} 
          </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Contact;
