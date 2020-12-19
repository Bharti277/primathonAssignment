import React from 'react'

function About() {

    const aboutStyle = {
        color: "black",
        backgroundColor: "#ccc",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "100%",
        // position: "relative",
        // top: "76px",
      };

    return (
        <div style={{position:"relative", top:"80px"}}>
            <h1>Welcome to About Page</h1>
            <div style={aboutStyle}>
                <h3>Hi there!</h3>
            </div>
        </div>
    )
}
export default About;