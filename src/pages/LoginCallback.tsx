import {
  useMemo, useEffect, useState, FC,
} from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { GuildsState } from '../recoil/atoms/Guilds';
import { UserState } from '../recoil/atoms/UserState';
import { AuthService } from '../services/AuthService';
import { DiscordService } from '../services/DiscordService';

export const LoginCallback:FC = () => {
  const [status, setStatus] = useState('Logging you in...');
  const setUser = useSetRecoilState(UserState);
  const setGuilds = useSetRecoilState(GuildsState);
  const location = useLocation();
  const history = useHistory();

  const code = useMemo(() => new URLSearchParams(location.search).get('code'), [location.search]);

  useEffect(() => {
    if (!code) {
      setStatus('No login code :(');
      return;
    }

    AuthService.Login(code)
      .then((res) => {
        setUser(res.user);

        return DiscordService.getGuilds();
      })
      .then((guilds) => {
        setGuilds(guilds);
        history.replace('/');
      })
      .catch((err) => {
        setStatus(`Error! ${err}`);
      });
  }, [history, code, setUser, setGuilds]);

  return <div>{status}</div>;
};
