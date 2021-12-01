import { ChildrenProp } from '../../../types/children-prop';
import * as S from './page-heading.styled';

function PageHeading({ children, ...props }: ChildrenProp): JSX.Element {
  return <S.PageHeading {...props}>{children}</S.PageHeading>;
}

export default PageHeading;
