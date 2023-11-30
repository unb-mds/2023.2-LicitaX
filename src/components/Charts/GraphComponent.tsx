import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MunicipioData } from '../Custom/types'; // Defina o tipo de dados conforme necessário

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface GraphProps {
  municipio: string;
}

const GraphComponent: React.FC<GraphProps> = ({ municipio }) => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedMunicipio = municipio
          .toLowerCase()
          .replace(/\s+/g, '-') // Substitui espaços em branco por hífens
          .normalize('NFD') // Normaliza caracteres acentuados
          .replace(/[\u0300-\u036f]/g, ''); // Remove caracteres diacríticos
    
        const response = await fetch(`https://raw.githubusercontent.com/unb-mds/2023-2-Squad07/main/public/${formattedMunicipio}_monthly_sums.json`);
        const data: MunicipioData[] = await response.json();
    
        const chartOptions = {
          colors: ['#222831'], 
          xaxis: {
            categories: data.map((item) => item.month),
          },
        };
    
        const chartSeries = [
          {
            name: 'Quantidade de Avisos de Licitação',
            data: data.map((item) => item.sum_num_avisos_licitacao),
          },
        ];
    
        setChartData({
          options: chartOptions,
          series: chartSeries,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setChartData({}); // Limpa os dados do gráfico em caso de erro
      }
    };

    fetchData();
  }, [municipio]);

  return (
    <div>
      {chartData.options && chartData.series && (
        <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
      )}
    </div>
  );
};

export default GraphComponent;
