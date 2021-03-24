import { Route } from 'react-router-dom';
import Main from '../components/user/Main';
import NotFound from './../components/shared/NotFound';
import CompareBoard from './../components/compare';
import ResultPage from '../components/compare/ResultPage';
import History from './../components/history/index';
import Login from '../components/user/Login'

import Home from '../Pages/Home'

export const landingRoutes = [
  {
    type: Route,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: NotFound,
  },
];


