import React, { Component } from "react";
import StockImage from "../../Assets/stock-image.png"


class Home extends Component {
  render() {
    return (
     
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome to Perry Pediatrics</h1>
            <p>At Perry Pediatrics we strive to provide the best medical care for your child from birth through college!</p>
            {/* <img src={StockImage} alt="doctors"/> */}
          </div>
        </div>
      </section>
    );
  }
}



export default Home;
