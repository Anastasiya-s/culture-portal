import React from "react";

  function ItemWorkLog(props) {
    return (
      <tr>
        <td>{props.item.time}</td>
        <td>{props.item.description}</td>
      </tr>
    );
  }

  export default ItemWorkLog;