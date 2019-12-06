import React, { Component } from "react";
import axios from "axios";
import DataCard from "./components/DataCard";
import NavHeader from "./components/NavHeader";
import { MainContainer } from "./styledComponents/AppStyling";

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
        <MainContainer>
          {this.state.data.map(player => (
            <DataCard key={player.id} data={player} />
          ))}
          ;
        </MainContainer>
      </div>
    );
  }
}

export default App;
