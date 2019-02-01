import React from "react";
import useMergeState from "./useMergeState";

export default function Form(props) {
  const [data, setData] = useMergeState({
    username: null
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(data);
  }

  function handleInputChange({ target: { name, value } }) {
    if (data.hasOwnProperty(name)) {
      setData({ [name]: value });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <button type="submit">Carregar Dados</button>
    </form>
  );
}
