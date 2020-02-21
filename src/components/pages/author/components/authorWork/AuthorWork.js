import React from 'react';

const AuthorWork = (props) => {
  console.log(props.works);
  return (<div>
    <h2 style = {{textAlign: 'center'}}>Работы автора</h2>
    <table className = 'table table-striped'>
      <thead>
        <tr>
          <th>Год</th>
          <th>Работа</th>
        </tr>
      </thead>
      <tbody>
        {props.works.map((v, i) => (
          <tr key = {i}>
            <td>{v.year}</td>
            <td>{v.description}</td>
          </tr>
        ))}
      </tbody>       
    </table>
  </div>);
};

export default AuthorWork;