import React from 'react';
import Styles from './styles/styles.css';

export default function Result(props) {
  const { name, motto, uniqueId } = props.data;

  return (
    <table className="resultTable" border="1">
      <tr>
        <td className="tableTitle">Nick</td>
        <td className="tableTitle">Missão</td>
      </tr>
      <tr>
        <td>{name}</td>
        <td>{motto}</td>
      </tr>
    </table>
  );
}
