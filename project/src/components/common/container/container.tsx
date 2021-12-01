import * as S from './container.styled';

type Props = {
  children: JSX.Element | null,
}

function Container({ children, ...props }: Props): JSX.Element {
  return <S.Container {...props}>{children}</S.Container>;
}

export default Container;
