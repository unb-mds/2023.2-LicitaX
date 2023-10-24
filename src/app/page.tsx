import Footer from '@/components/Footer';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Barra Superior */}
      <div className="bg-gray-900 h-32 flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* Logo da Aplicação */}
          <img src="https://i.pinimg.com/originals/7a/16/ca/7a16cae276fbf9f22a1d93999cff390c.png" alt="Logo" className="h-60" />
        </div>
        <div className="flex space-x-4">
          {/* Links de Navegação Interna com fonte mais negrito (bold) e espaço maior entre eles */}
          <a href="/" className="text-white hover:text-gray-300 text-lg font-semibold ml-4">Home</a>
          <a href="/sobre" className="text-white hover:text-gray-300 text-lg font-semibold ml-4">Sobre</a>
          <a
            href="https://github.com/unb-mds/2023.2-LicitaX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-lg font-semibold ml-4"
          >
            GitHub
          </a>
        </div>
      </div>
      
      {/* Barra à Esquerda com texto em negrito maior e outra fonte */}
      <div className="bg-teal-500 w-80 h-screen p-4">
        <p className="text-white font-bold text-2xl mt-4 mb-4">Confira a quantidade de avisos de licitação nos municípios do Ceará.</p>
        <p className="text-white mt-4">Este projeto foi realizado pelo Squad 07 durante o segundo semestre de 2023 na disciplina Métodos de Desenvolvimento de Software da Universidade de Brasília.</p>
        {/* Logo da Universidade com dois espaços */}
        <img src="https://i.pinimg.com/originals/84/a7/86/84a786798c453d6a536f31cba73e5409.png" alt="Logo da Universidade" className="h-60 mt-1" />
      </div>
      
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
}
