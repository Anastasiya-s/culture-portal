import React from "react";
import { PrsnWorklog } from "../prsnWorkLog";

function GetPerson(props) {
  console.log("getPeople");
  console.log(props.prsn.name);
  return (
    
      <PrsnWorklog log={props.prsn.workLog} nameLog={props.prsn.name} />      
    
  );
}
/* whenClicked is a property not an event, per se. 
    <div>
      <details>
        <summary><h2> {props.prsn.name}</h2> </summary>        
        
        <img src={props.prsn.image} alt="avatar" />
        <a href={props.prsn.linkGit} alt="git">
            <img className="icon"src="@resources/images/icon-git.png" alt="avatar" />
        </a>
        <details>
          <summary> Executed work </summary>
          <PrsnWorklog log={props.prsn.workLog} />
        </details>
      </details>
    </div>
   
  ); */

export default GetPerson;
