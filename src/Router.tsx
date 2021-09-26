import { createElement, FC, Suspense } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RouteDefinition } from './models/RouteDefinition';
import { Login } from './pages/Login';
import { LoginCallback } from './pages/LoginCallback';
import { NotFound } from './pages/NotFound';
import { Quotes } from './pages/Quotes';
import { UserState } from './recoil/atoms/UserState';

const routes: RouteDefinition[] = [
  {
    path: '/login',
    component: Login,
    allowAnonymous: true,
  },
  {
    path: '/login-callback',
    component: LoginCallback,
    allowAnonymous: true,
  },
  {
    path: '/',
    component: Quotes,
  },
  {
    path: '*',
    component: NotFound,
    allowAnonymous: true,
  },
];

const SmartRoute: FC<{route: RouteDefinition}> = (props) => {
  const { route } = props;
  const { component, allowAnonymous } = route;
  const user = useRecoilValue(UserState);
  const history = useHistory();

  if (!allowAnonymous && !user) {
    history.replace('/login');
    return null;
  }

  return createElement(component);
};

export const Router: FC = () => (
  <Suspense fallback={() => null}>
    <Switch>
      {routes.map((route) => <Route exact key={route.path} path={route.path} render={() => <SmartRoute route={route} />} />)}
    </Switch>
  </Suspense>
);
