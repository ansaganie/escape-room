import { ChildrenProp } from '../../../types/children-prop';
import * as S from './page-title.styled';

function PageTitle({ children, ...props }: ChildrenProp): JSX.Element {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

export default PageTitle;
