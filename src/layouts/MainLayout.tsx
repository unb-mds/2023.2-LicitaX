import '../app/globals.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Cabeçalho */}
      <div className="bg-gray-900 w-full p-4 text-gray-200">
        <div className="flex items-center justify-between">
          <img
            src="../assets/svgs/logobranca.svg"
            alt="Logo"
            className="h-8 w-8"
          />
          <div className="flex space-x-4">
            <a href="/" className="text-gray-200">Home</a>
            <a href="/sobre" className="text-gray-200">Sobre</a>
            <a href="/github" className="text-gray-200">GitHub</a>
          </div>
        </div>
      </div>

      {/* Barra Lateral */}
      <div className="bg-teal-500 w-48">
        {/* Conteúdo da Barra Lateral */}
      </div>

      <div className="flex flex-1 p-4">
        {/* Conteúdo da Página */}
        {children}
      </div>
    </div>
  );
}
