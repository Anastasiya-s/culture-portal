import React from 'react';

const AuthorWork = (props) => {
  console.log(props.tableTitle);
  return (<div>
    <h2 style={{ textAlign: 'center' }}>{props.text}</h2>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>{props.tableTitle.year}</th>
          <th>{props.tableTitle.work}</th>
        </tr>
      </thead>
      <tbody>
        {props.works.map((v, i) => (
          <tr key={i}>
            <td>{v.year}</td>
            <td>{v.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>);
};

export default AuthorWork;