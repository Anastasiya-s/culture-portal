import React from "react";
import { ItemWorkLog } from "../itemWorkLog";
import "../../style.scss";

function PrsnWorklog(props) {
  console.log("PrsnWorklog");
  console.log(props.name);
  //var children = [];
  return (
    <React.Fragment>
      {props.log.map((v, i) => (
        <ItemWorkLog item={v} name={props.nameLog}/>
      ))}
    </React.Fragment>
  );
}

export default PrsnWorklog;
