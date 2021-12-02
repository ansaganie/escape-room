import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../constants';
import NotFound from '../not-found/not-found';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Switch>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route exact path={AppRoute.DetailedQuest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <NotFound />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
