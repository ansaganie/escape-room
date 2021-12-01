import { ChildrenProp } from '../../../types/children-prop';
import * as S from './container.styled';

function Container({ children, ...props }: ChildrenProp): JSX.Element {
  return <S.Container {...props}>{children}</S.Container>;
}

export default Container;
