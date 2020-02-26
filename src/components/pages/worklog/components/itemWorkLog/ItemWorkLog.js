import React from "react";
//import {PrsnWorklog} from "../prsnWorkLog";
  function ItemWorkLog(props) {
    console.log(props);
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.item.time}</td>
        <td>{props.item.description}</td>
        </tr>
    );
  }

  export default ItemWorkLog;