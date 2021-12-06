import React from 'react';
import {
  PageTitle
} from '../common/common';
import * as S from './server-not-working.styled';


function ServerNotWorking(): JSX.Element {
  return (
    <S.Main>
      <PageTitle>Наш сайт временно не работает, попробуйте зайти позже</PageTitle>
    </S.Main>
  );
}

export default ServerNotWorking;
