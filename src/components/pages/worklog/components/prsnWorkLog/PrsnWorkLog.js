import React from "react";
import { ItemWorkLog } from "../itemWorkLog";
import "../../style.scss";

function PrsnWorklog(props) {
  return (
    <React.Fragment>
      {props.log.map((v, i) => (
        <ItemWorkLog item={v} key={i} name={props.nameLog} />
      ))}
    </React.Fragment>
  );
}

export default PrsnWorklog;
