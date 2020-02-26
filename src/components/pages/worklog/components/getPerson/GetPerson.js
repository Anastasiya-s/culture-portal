import React from "react";
import { PrsnWorklog } from "../prsnWorkLog";


function GetPerson(props) {
  return (
      <React.Fragment>
        <tr className="thead-inverse" style={{columnSpan:2, textAlign:"center"}}>{props.prsn.name}</tr>
        <PrsnWorklog log={props.prsn.workLog} nameLog={props.prsn.name} />  
        </React.Fragment>
          
    
  );
}

export default GetPerson;
