import React from "react";
import { PrsnWorklog } from "../prsnWorkLog";


function GetPerson(props) {
  return (
      <React.Fragment>
        <tr><td  colSpan={2} style={{textAlign:"center"}}>{props.prsn.name}</td></tr>
        <PrsnWorklog log={props.prsn.workLog} nameLog={props.prsn.name} />  
        </React.Fragment>
          
    
  );
}

export default GetPerson;
