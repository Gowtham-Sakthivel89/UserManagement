import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3a0ca3',
    accent: '#4895ef',
    danger: '#f72585',
    success: '#4cc9f0',
    white: '#ffffff',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray500: '#adb5bd',
    gray800: '#212529',
  },
  fonts: {
    main: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px'
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.fonts.main};
    line-height: 1.5;
    color: ${theme.colors.gray800};
    background-color: ${theme.colors.gray100};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;