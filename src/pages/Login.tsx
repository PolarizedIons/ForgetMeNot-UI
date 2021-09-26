import { useEffect, useState, FC } from 'react';

import { AuthService } from '../services/AuthService';

export const Login:FC = () => {
  const [status, setStatus] = useState('Logging you in...');
  useEffect(() => {
    AuthService.GetOAuthUrl()
      .then((url) => {
        window.location.href = url;
      })
      .catch((err) => {
        setStatus(`Error! ${err.message}`);
      });
  }, []);

  return <div>{status}</div>;
};
