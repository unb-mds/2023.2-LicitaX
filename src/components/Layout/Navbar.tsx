import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-gray-900 h-32 flex items-center justify-between p-4" >
      <div className="flex items-center">
        {/* Logo da Aplicação */}
        <Image
          alt="logo-unb"
          width={240}
          height={240}
          src="https://i.pinimg.com/originals/7a/16/ca/7a16cae276fbf9f22a1d93999cff390c.png"
        />
      </div>
      <div className="flex space-x-4">
        {/* Links de Navegação Interna com fonte mais negrito (bold) e espaço maior entre eles */}
        <Link href="/" className="text-white hover:text-gray-300 text-lg font-semibold ml-4">Home</Link>
        <Link href="/pesquisar" className="text-white hover:text-gray-300 text-lg font-semibold ml-4">Pesquisar</Link>
        <Link href="/sobre" className="text-white hover:text-gray-300 text-lg font-semibold ml-4">Sobre</Link>
        <Link
          href="https://github.com/unb-mds/2023.2-LicitaX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-lg font-semibold ml-4"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}