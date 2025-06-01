import styled from 'styled-components';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { colors, spacing, breakpoints } from '../../theme';
import { useAuth } from '../../hooks/useAuth';

const LayoutContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;
  background-color: ${colors.background};
`;

const MainContent = styled.main`
  grid-area: main;
  padding: ${spacing.large};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.medium};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.small};
  }
`;

export const MainLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <LayoutContainer>
      <Header user={user} />
      {user && <Sidebar />}
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};