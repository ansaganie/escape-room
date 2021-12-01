import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <S.GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/quest">
              <DetailedQuest />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
