import { Footer, Navbar } from '@/components/Layout';
import { Home } from '@/components/Pages';

const HomePage = () => {
  const props = { municipio: 'geral', ano: 'geral' };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Home {...props} />
      <Footer />
    </div>
  );
};

export default HomePage;
