import React from 'react';
import {
  PageTitle
} from '../common/common';
import * as S from './server-not-working.styled';


function ServerNotWorking(): JSX.Element {
  return (
    <S.Main>
      <PageTitle>Мы не нашли страницу который вы запрашиваете</PageTitle>
    </S.Main>
  );
}

export default ServerNotWorking;
