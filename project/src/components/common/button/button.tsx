import React from 'react';
import { ChildrenProp } from '../../../types/children-prop';
import * as S from './button.styled';

type Props = ChildrenProp & {
  onClick: () => void,
}

function Button({ children, ...props }: Props): JSX.Element {
  return <S.Button {...props}>{children}</S.Button>;
}

export default Button;
