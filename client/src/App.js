import React, { Component } from "react";
import axios from "axios";

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
    return <div className="App"></div>;
  }
}

export default App;
