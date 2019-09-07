import React, { Component } from "react";
import axios from "axios";

import "./Home.css";

class Home extends Component {
  state = {
    data: [],
    currentpage: 1,
    loading: true
  };
  componentDidMount() {
    axios
      .get("https://reqres.in/api/login?page=" + this.state.currentpage)
      .then(res =>
        this.setState({
          data: res.data.data,
          loading: false
        })
      );
  }

  render() {
    if (this.state.data !== []) {
      return (
        <div className="home">
          <div className="home-header">
            Welcome to Cardify, Enjoy the demo!!
          </div>
          <div className="cards">
            {this.state.data.map(el => {
              return (
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">{el.name}</p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div className="info">
                        <strong>
                          <div className="subhead">Pantone_Value:</div>
                        </strong>
                        <div className="value">{el.pantone_value}</div>
                      </div>
                      <br />
                      <div className="info">
                        <strong>
                          <div className="subhead">Year:</div>
                        </strong>
                        <div className="value">{el.year}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Home;
