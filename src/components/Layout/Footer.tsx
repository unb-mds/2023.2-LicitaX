import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex md:flex-row text-xs text-[#6C6C6C] gap-x-5 items-center gap-y-5">
      <Image
        alt="logo"
        width={96}
        height={22}
        src="https://exoonero.org/creative-commons.png"
      />
      <p>
        Dados públicos extraídos de diários oficiais municipais da Associação
        dos Municípios do Estado do Ceará (APRECE). Todo o conteúdo do site está disponível
        sob a licença Creative Commons Atribuição 4.0 Internacional, o que
        significa que pode ser compartilhado e reutilizado para trabalhos
        derivados, desde que citada a fonte.
      </p>
    </footer>
  );
};
