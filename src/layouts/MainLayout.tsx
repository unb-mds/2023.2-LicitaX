import '../app/globals.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col">
      <div className="bg-gray-900 h-16 w-screen">
        {/* Conteúdo da Barra Superior */}
      </div>
      <div className="bg-teal-500 w-16 h-screen">
        {/* Conteúdo da Barra à Esquerda */}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
