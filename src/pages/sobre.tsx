import { Footer, FooterSobre, Navbar } from '@/components/Layout';
import { Sobre } from '@/components/Pages';

const SobrePage = () => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <Sobre />
    <FooterSobre />
  </div>
);

export default SobrePage;