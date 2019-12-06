import React from "react";
import { SoccerCard } from "../styledComponents/AppStyling";

const DataCard = props => {
  // console.log(props);
  return (
    <SoccerCard>
      <h1>{props.data.name}</h1>
      <h3>Country: {props.data.country}</h3>
      <p>Google Searches: {props.data.searches}</p>
      <p>ID: {props.data.id}</p>
    </SoccerCard>
  );
};

export default DataCard;
