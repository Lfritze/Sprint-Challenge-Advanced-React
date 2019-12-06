import React, { Component } from "react";
import axios from "axios";
import DataCard from "./components/DataCard";
import NavHeader from "./components/NavHeader";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log("get data error in .catch App.js", error);
      });
  }
  render() {
    return (
      <div className="App">
        <NavHeader />
        <div>
          {this.state.data.map(player => (
            <DataCard key={player.id} data={player} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
