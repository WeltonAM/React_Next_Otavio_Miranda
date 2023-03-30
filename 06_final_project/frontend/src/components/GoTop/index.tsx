import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import Link from 'next/link';

export const GoTop = () => {
  return (
    <Link href="#">
      <Styled.Container aria-label="Go to top" title="Go to top">
        <KeyboardArrowUp />
      </Styled.Container>
    </Link>
  );
};
