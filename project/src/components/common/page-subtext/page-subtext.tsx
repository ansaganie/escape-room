import { ChildrenProp } from '../../../types/children-prop';
import * as S from './page-subtext.styled';

function PageSubtext({ children, ...props }: ChildrenProp): JSX.Element {
  return <S.PageSubtext {...props}>{children}</S.PageSubtext>;
}

export default PageSubtext;
