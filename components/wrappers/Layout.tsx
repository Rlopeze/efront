import Navbar from '../navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
