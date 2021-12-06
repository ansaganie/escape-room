import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../constants';
import { useAppSelector } from '../../hooks/redux';
import { getServerNotWorking } from '../../store/app/app-selectors';
import HomeScreen from '../home/home';
import DetailedQuestScreen from '../detailed-quest/detailed-quest';
import ContactsScreen from '../contacts/contacts';
import NotFoundScreen from '../not-found/not-found';
import ServerNotWorkingScreen from '../server-not-working/server-not-working';


function App(): JSX.Element {
  const serverNotWorking = useAppSelector(getServerNotWorking);

  if (serverNotWorking) {
    return <ServerNotWorkingScreen />;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Switch>
        <Route exact path={AppRoute.Home}>
          <HomeScreen />
        </Route>
        <Route exact path={AppRoute.DetailedQuest}>
          <DetailedQuestScreen />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <ContactsScreen />
        </Route>
        <NotFoundScreen />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
