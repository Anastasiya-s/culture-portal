import React from "react";
import { ItemWorkLog } from "../itemWorkLog";

function PrsnWorklog(props) {
  console.log("PrsnWorklog");

  var children = [];
  return (
    <ul>
      {props.log.map((v, i) => (
        <li key={i}>
          <ItemWorkLog item={v} />
        </li>
      ))}
    </ul>
  );
}

export default PrsnWorklog;
