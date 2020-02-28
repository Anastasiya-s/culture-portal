import React from "react";
//import {PrsnWorklog} from "../prsnWorkLog";
import "../../teampage.css";

import Zoom from 'react-reveal/Zoom';

function GetPerson(props) {
  console.log("getPeople");

  return (
    //    <div className="card-wrap">
    <Zoom>
      <div className="card-item">
        <div className="card-item-wrap">
          <div>
            <img className="avatar" src={props.prsn.image} alt="avatar" />
            <h2> {props.prsn.name}</h2>
            <a href={props.prsn.linkGit} alt="git">
              Github
            </a>
            <br />
          </div>

          <div className="card-item-description"> {props.prsn.description}</div>
        </div>
      </div>
    </Zoom>

    //  </div>
  );
}

export default GetPerson;
