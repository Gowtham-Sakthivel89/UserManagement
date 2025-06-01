import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background: #4361ee;
  color: white;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const AppHeader = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">Task Manager</Link>
        <div>
          <Link to="/profile" style={{ color: 'white', marginRight: '1rem' }}>Profile</Link>
          <Link to="/todos" style={{ color: 'white' }}>Todos</Link>
        </div>
      </Nav>
    </Header>
  );
};

export default AppHeader;