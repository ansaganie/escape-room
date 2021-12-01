import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

function Header(): JSX.Element {
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link active to="/">
                Квесты
              </S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link active={false} to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link active={false} to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link active={false} to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link active={false} to="/contacts">Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;