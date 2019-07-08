import React, { Component } from "react";
import StockImage from "../../Assets/stock-image.png"


class Home extends Component {
  render() {
    return (
     
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Welcome to Perry Pediatrics</h1>
            <p>At Perry Pediatrics we strive to provide the best medical care for your child from birth through college!</p>
            <img src={StockImage} alt="doctors"/>
          </div>
        </div>
      </section>
    );
  }
}



export default Home;
