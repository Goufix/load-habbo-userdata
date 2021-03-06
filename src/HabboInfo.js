import React, { useState, useEffect } from 'react';
import Result from './Result';
import Styles from './styles/styles.css';

const API_ENDPOINT = 'https://www.habbo.com.br/api/public/users';

export default function HabboInfo(props) {
  const [userdata, setUserdata] = useState(null);

  useEffect(async () => {
    setUserdata(null);

    const response = await fetch(`${API_ENDPOINT}?name=${props.username}`);
    const data = await response.json();

    setUserdata(data);
  }, [props.username]);

  return (
    <div style={{ padding: '15px 0' }}>
      Dados para o usuário <code>{props.username}</code>:
      <pre style={{ marginTop: 15 }}>
        {userdata === null ? 'Carregando...' : <Result data={userdata} />}
      </pre>
    </div>
  );
}
