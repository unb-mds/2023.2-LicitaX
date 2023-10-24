import Footer from '@/components/Footer';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <div className="flex-col">
      <div className="bg-gray-900 h-16 w-screen">
        {/* Conteúdo da Barra Superior */}
      </div>
      <div className="bg-teal-500 w-16 h-screen">
        {/* Conteúdo da Barra à Esquerda */}
      </div>
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
}
