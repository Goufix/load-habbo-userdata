import React from 'react';

export default function Result(props) {
  const {name, motto, uniqueId} = props.data

  return(
    <table border="1">
    <tr>
      <td>{name}</td>
      </tr>
  )
}
