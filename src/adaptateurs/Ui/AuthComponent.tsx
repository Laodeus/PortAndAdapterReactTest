// adapters/Ui/AuthComponent.tsx

import React, { useState } from 'react';
import { authService, AuthServicePort } from '../../application/AuthService';

const AuthComponent: React.FC<{ auth?: AuthServicePort }> = ({
  auth = authService,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const handleLogin = async () => {
    const connection = auth();
    console.log(connection);
    const login = await connection.login('', '');
    const user = connection.getUser();
    console.log(login);
    setResponse(JSON.stringify(user, null, 2));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>{response}</div>
    </div>
  );
};

export default AuthComponent;
