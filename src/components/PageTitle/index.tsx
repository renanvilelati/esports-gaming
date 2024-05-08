import { ReactNode } from 'react';
import { StyledPageTitle } from './style';

interface iTitle {
  children: ReactNode;
}

const PageTitle = ({ children }: iTitle) => {
  return (
    <StyledPageTitle>
      <h2>{children}</h2>
    </StyledPageTitle>
  );
};

export default PageTitle;
