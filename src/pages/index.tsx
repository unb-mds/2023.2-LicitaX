import { Footer, Navbar } from '@/components/Layout';
import { Home } from '@/components/Pages';

const HomePage = () => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <Home municipio='geral' ano="geral" />
    <Footer />
  </div>
);

export default HomePage;
