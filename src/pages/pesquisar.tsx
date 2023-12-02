import { Footer, Navbar } from '@/components/Layout';
import { Pesquisar } from '@/components/Pages';

const PesquisarPage = () => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <Pesquisar />
    <Footer />
  </div>
);

export default PesquisarPage;