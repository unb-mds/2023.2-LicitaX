import Image from "next/image";
import { useState, useEffect } from "react"

interface TitleProps {
  municipio: string;
  ano: string;
}

export const Home = ({ municipio, ano }: TitleProps) => {
  const [titleText, setTitleText] = useState("Brasília");
  const [bids, setBids] = useState<any>([]);

  const buildTitle = () => {
    fetch(`https://raw.githubusercontent.com/unb-mds/2023-2-Squad07/main/public/resultados.json`, {
      method: 'GET',
    }).then(res => res.json())
      .then(res => setBids(res))
  };

  useEffect(() => {
    buildTitle();

    if (municipio === 'geral') {
      setTitleText('Ceará')
    }
  }, [municipio]);

  // Função para formatar a saída dos avisos
  const formatAviso = (bid: any) => {
    return (
      <div className="aviso">
        No dia <span className="text-red-500">{bid.pdf_filename.replace(/APRECE_(\d{2})_(\d{2})_(\d{2}).pdf/, '$1/$2/$3')}</span> houveram <span className="text-red-500">{bid.num_avisos_licitacao} avisos de licitação</span>.
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="bg-teal-500 w-80 h-screen p-4">
        <p className="text-white font-bold text-2xl mt-4 mb-4">Confira a quantidade de avisos de licitação nos municípios do Ceará.</p>
        <p className="text-white mt-4">Este projeto foi realizado pelo Squad 07 durante o segundo semestre de 2023 na disciplina Métodos de Desenvolvimento de Software da Universidade de Brasília.</p>
        {/* Logo da Universidade com dois espaços */}
        <Image
          alt="logo-unb"
          width={240}
          height={240}
          src="https://i.pinimg.com/originals/84/a7/86/84a786798c453d6a536f31cba73e5409.png"
        />
      </div>
      <div className="p-4 text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10">
        {ano === "geral" ? (
          <>
            Acompanhe a quantidade de avisos de licitação que ocorreram em
            <span className="text-[#4AA381]">{(" " + titleText) as string}</span>
          </>
        ) : (
          <>
            Acompanhe a quantidade de avisos de licitação que ocorreram em
            <span className="text-[#4AA381]">{(" " + titleText) as string} - {(" " + ano) as string}</span>
          </>
        )}
        <br />
        <div className="font-semibold">
          {bids.map((bid: any, i: number) => (
            <div key={i} className="flex-row pt-5 pb-5">
              {formatAviso(bid)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
