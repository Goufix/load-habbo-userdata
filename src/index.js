import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import HabboInfo from "./HabboInfo";

import "./styles.css";

function App() {
  const [username, setUsername] = useState(null);

  function handleSubmit({ username }) {
    setUsername(username);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {username && <HabboInfo username={username} />}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
