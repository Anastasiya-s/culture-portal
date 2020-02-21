import React from "react";
//import {PrsnWorklog} from "../prsnWorkLog";
  function ItemWorkLog(props) {
    console.log(props);
    return (
      <div>
        <p>{props.item.time}</p>
        <p>{props.item.description}</p>
      </div>
    );
  }

  export default ItemWorkLog;