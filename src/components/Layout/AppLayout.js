import styled from 'styled-components';
import AppHeader from './AppHeader';

const Main = styled.main`
  padding: 2rem;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Main>{children}</Main>
    </>
  );
};

export default AppLayout;