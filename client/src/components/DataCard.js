import React from "react";

const DataCard = props => {
  // console.log(props);
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>Country: {props.data.country}</h3>
      <p>Google Searches: {props.data.searches}</p>
      <p>ID: {props.data.id}</p>
    </div>
  );
};

export default DataCard;
