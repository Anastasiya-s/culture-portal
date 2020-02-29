import React from 'react';

const AuthorWork = ({text, tableTitle, works}) => {
  return (<div>
    <h2 style={{ textAlign: 'center' }}>{text}</h2>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>{tableTitle.year}</th>
          <th>{tableTitle.work}</th>
        </tr>
      </thead>
      <tbody>
        {works.map((v, i) => (
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