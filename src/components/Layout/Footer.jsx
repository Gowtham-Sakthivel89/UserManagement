import styled from 'styled-components';
import { colors, spacing } from '../../theme';

const FooterWrapper = styled.footer`
  grid-area: footer;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: ${spacing.medium};
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </FooterWrapper>
  );
};