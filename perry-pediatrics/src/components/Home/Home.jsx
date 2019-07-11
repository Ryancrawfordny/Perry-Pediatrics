import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div class="tile is-vertical is-16">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <h1 className="title">Welcome to Perry Pediatrics</h1>
            </article>
            <h2>
              At Perry Pediatrics we strive to provide the best medical care for
              your child from birth through college!
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
