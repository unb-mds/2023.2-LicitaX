import Image from "next/image";
import { useState, useEffect } from "react";
import GraphComponent from "../Charts/GraphComponent";
import { MunicipioData } from '../Custom/types'; 

interface TitleProps {
  ano: string;
}

export const Home: React.FC<TitleProps> = ({ ano }) => {
  const [selectedMunicipio, setSelectedMunicipio] = useState<string | null>(null);
  const [titleText, setTitleText] = useState("Ceará");
  const [bids, setBids] = useState<MunicipioData[]>([]);

  useEffect(() => {
    if (selectedMunicipio) {
      setTitleText(selectedMunicipio);
    } else {
      setTitleText("Ceará");
    }
  }, [selectedMunicipio]);

  const municipios = [
    "Abaiara", "Acopiara", "Altaneira", "Alto Santo", "Antonina do Norte", "Aratuba", "Arneiroz", "Assaré",
    "Banabuiú", "Barbalha", "Boa Viagem", "Campos Sales", "Cariús", "Chorozinho", "Croatá", "Ereré", "Farias Brito", "Fortim",
    "Frecheirinha", "Groaíras", "Guaraciaba do Norte", "Ibaratama", "Ibicuitinga", "Icó", "Iguatu", "Irauçuba",
    "Jaguaretama", "Jardim", "Jati", "Mauriti", "Milagres", "Mombaça", "Morada Nova", "Nova Olinda", "Nova Russas",
    "Orós", "Palhano", "Piquet Carneiro", "Potengi", "Quiterianópolis", "Quixáda", "Quixelô", "Quixeré", "Salitre",
    "Santana do Cariri", "Tabuleiro do Norte", "Várzea Alegre"
  ];

  const handleMunicipioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMunicipio(event.target.value);
  };

  return (
    <div className="flex">
      <div className="bg-[#7f1d1d] w-80 h-screen p-4 text-white">
        <p className="text-white font-bold text-2xl mt-4 mb-4">Confira a quantidade de avisos de licitação nos municípios do Ceará.</p>
        <p className="text-white mt-4">Este projeto foi realizado pelo Squad 07 durante o segundo semestre de 2023 na disciplina Métodos de Desenvolvimento de Software da Universidade de Brasília.</p>
        <Image
          alt="logo-unb"
          width={240}
          height={240}
          src="https://i.pinimg.com/originals/84/a7/86/84a786798c453d6a536f31cba73e5409.png"
        />
      </div>
      <div className="p-4 text-2xl 2xl:text-3xl 3xl:text-[2.4375rem] font-semibold lg:w-[42.93rem] leading-10">
        <div>
          <label>Selecione o Município:</label>
          <select
            onChange={handleMunicipioChange}
            value={selectedMunicipio || ''}
          >
            <option value="">Todos</option>
            {municipios.map((municipio) => (
              <option key={municipio} value={municipio}>
                {municipio}
              </option>
            ))}
          </select>
        </div>
        {ano === "geral" ? (
          <>
            Acompanhe a quantidade de avisos de licitação que ocorreram em todos os meses de 2023 em
            <span className="text-[#802323]">{(" " + titleText) as string}</span>
          </>
        ) : (
          <>
            Acompanhe a quantidade de avisos de licitação que ocorreram em 2023 em
            <span className="text-[#4AA381]">{(" " + titleText) as string} - {(" " + ano) as string}</span>
          </>
        )}
        <br />
        <GraphComponent municipio={selectedMunicipio || ''} />
      </div>
    </div>
  );
};
