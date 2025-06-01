import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} User Management App</p>
      </footer>
    </div>
  );
};

export default Layout;