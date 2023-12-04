import Image from "next/image";
import { useState, useEffect } from "react";
import axios from 'axios';

export const Pesquisar = () => {
  const [tema, setTema] = useState("");
  const [codigoIBGEMunicipio, setCodigoIBGEMunicipio] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [resultados, setResultados] = useState<{ total_gazettes: number, gazettes: Array<any> } | null>(null);

  const handleSearch = async () => {
    try {
      const apiUrl = `https://queridodiario.ok.org.br/api/gazettes?querystring=${tema}&territory_ids=${codigoIBGEMunicipio}&published_since=${dataInicial}&published_until=${dataFinal}`;

      console.log("API URL:", apiUrl);

      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        const data = response.data;
        console.log("API Response:", data);

        // Atualiza o estado diretamente com a resposta da API
        setResultados(data);

        // Remove o log abaixo, pois o estado pode não ser atualizado imediatamente
        // console.log("Novo estado resultados:", resultados);
      } else {
        throw new Error(`Erro na resposta da API: ${response.statusText}`);
      }
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
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <select
            value={codigoIBGEMunicipio}
            onChange={(e) => setCodigoIBGEMunicipio(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Selecione o Município</option>
            <option value="2312908">Sobral (CE)</option> {/* Código IBGE de Sobral */}
            <option value="2305233">Horizonte (CE)</option> {/* Código IBGE de Horizonte */}
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
        {resultados && resultados.gazettes && (
          <div>
            <p>O assunto &quot;{tema}&quot; foi citado {resultados.total_gazettes} vezes no período:</p>
            {resultados.gazettes.map((excerto, index) => (
              <div key={index} className="border p-4 mt-4">
                <p>Data: {excerto.date}</p>
                <p>Edição: {excerto.edition}</p>
                <p>Excerto:</p>
                <pre>{excerto.excerpts.join("\n")}</pre>
                <div className="mt-2">
                  <a href={excerto.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-4">Baixar PDF</a>
                  <a href={excerto.txt_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Baixar TXT</a>
                </div>
              </div>
            ))}
          </div>
        )}
        {resultados && resultados.gazettes && resultados.gazettes.length === 0 && (
          <p>Nenhum resultado encontrado para a pesquisa.</p>
        )}
      </div>
    </div>
  );
};