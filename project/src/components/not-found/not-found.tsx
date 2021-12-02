import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import {
  MainLayout,
  PageTitle,
  PageSubtext
} from '../common/common';
import * as S from './not-found.styled';


function NotFound(): JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.Title>404</S.Title>
        <PageTitle>Мы не нашли страницу который вы запрашиваете.</PageTitle>
        <Link to={AppRoute.Home}>
          <PageSubtext>Вернуться домой  </PageSubtext>
        </Link>
      </S.Main>
    </MainLayout>
  );
}

export default NotFound;
