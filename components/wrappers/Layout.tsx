import Navbar from '../navbar';
import { Toaster } from '../ui/toaster';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Toaster />
  </>
);

export default Layout;
