import logo from '../../../assets/img/logo.svg';
import { AppRoute, Menu } from '../../../constants';
import * as S from './header.styled';

function Header(): JSX.Element {
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Home}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            {Menu
              .map(({ title, link }) => (
                <S.LinkItem key={title}>
                  <S.Link exact to={link}>{title}</S.Link>
                </S.LinkItem>
              ))}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
