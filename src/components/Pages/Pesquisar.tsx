import Image from "next/image";
import { useState } from "react";

export const Pesquisar = () => {
  const [assunto, setAssunto] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  const handleSearch = async () => {
    // Implemente a chamada à API usando os estados (assunto, municipio, dataInicial, dataFinal)
    // Certifique-se de utilizar a URL correta da API.

    try {
      // Código para chamar a API aqui
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  };

  return (
    <div className="flex">
      <div className="bg-[#410c0c] w-80 h-screen p-4 text-white">
        <p className="text-white font-bold text-2xl mt-4 mb-4">
          Em que você tem interesse?
        </p>
        <p className="text-white mt-4">
          Aqui você pode pesquisar sobre qualquer tema e verificar cada vez que ele foi discutido em um determinado intervalo de tempo nos diários oficiais dos municípios de Sobral e Horizonte, no Ceará.
        </p>
        <Image
          alt="logo-unb"
          width={240}
          height={240}
          src="https://i.pinimg.com/originals/84/a7/86/84a786798c453d6a536f31cba73e5409.png"
        />
      </div>
      <div className="flex flex-col items-center ml-16">
      <div className="flex space-x-6 mt-10">
        <input
          type="text"
          placeholder="Sobre o que você quer saber?"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <select
          value={municipio}
          onChange={(e) => setMunicipio(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Selecione o Município</option>
          <option value="Sobral">Sobral (CE)</option>
          <option value="Horizonte">Horizonte (CE)</option>
        </select>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Data Inicial:
          </label>
          <input
            type="date"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Data Final:
          </label>
          <input
            type="date"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 bg-[#410c0c] text-white p-2 rounded hover:bg-[#832929]"
        style={{ width: "200px" }}
      >
        Pesquisar
      </button>
    </div>
    </div>
  );
};