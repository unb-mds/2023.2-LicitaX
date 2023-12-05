import Link from 'next/link';
import Image from 'next/image';

interface MemberProps {
    name: string;
    role: string;
    githubUsername: string;
}

const Member: React.FC<MemberProps> = ({ name, role, githubUsername }) => (
    <div className="flex items-center gap-6">
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
            <div className="flex-shrink-0">
                <img
                    src={`https://github.com/${githubUsername}.png?size=64`}
                    alt={`Foto de ${name}`}
                    className="object-cover w-16 h-16 rounded-full"
                />
            </div>
        </a>
        <div>
            <Link href={`https://github.com/${githubUsername}`} passHref>
                <p className="font-bold cursor-pointer">
                    {name}
                </p>
            </Link>
            <p className="font-normal">{role}</p>
        </div>
    </div>
);

export const Sobre = () => {
    const members = [
        {
            name: "José André Rabelo",
            role: "Product Owner",
            githubUsername: "joseandre25",
        },
        {
            name: "Giovana Barbosa da Silva",
            role: "Scrum Master",
            githubUsername: "gio221",
        },
        {
            name: "Samara Leticia Alves",
            role: "Desenvolvedora",
            githubUsername: "samarawwleticia",
        },
        {
            name: "Julia Takaki Neves",
            role: "Desenvolvedora",
            githubUsername: "juliatakaki",
        },
        {
            name: "Rafael Oliveira Bonach",
            role: "Arquiteto",
            githubUsername: "RafaBonach",
        },
    ];

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="mb-8">
                <h1 className="p-4 text-2xl font-semibold">
                    Sobre o LicitaX
                </h1>
                <p className="text-gray-700">
                    O LicitaX é uma plataforma inspirada no{' '}
                    <a href="https://exoonero.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Exoonero
                    </a>{' '}
                    e no{' '}
                    <a href="https://queridodiario.ok.org.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Querido Diário
                    </a>.{' '}
                    O LicitaX foi desenvolvido para simplificar o acesso e a compreensão dos processos de licitação nos municípios associados à APRECE (Associação dos Municípios do Estado do Ceará). Utilizando uma avançada técnica de web scraping com o framework Scrapy, nosso software extrai mensalmente a quantidade de avisos de licitação, oferecendo uma visão consolidada de todas as atividades licitatórias ao longo de 2023.
                </p>

            </div>

            <div className="flex mb-8 space-x-4">
                {/* Bloco de recurso 1 */}
                <div className="flex-shrink-0">
                    <Image
                        src="https://i.ibb.co/BBHhPD1/meet.png"
                        alt="Descrição da imagem 1"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-left">
                    <h2 className="text-lg font-semibold mb-2">Avisos de Licitação em Tempo Real</h2>
                    <p className="text-gray-700">
                        Obtenha informações atualizadas sobre a quantidade de avisos de licitação em todos os municípios associados à APRECE, mês a mês, de forma clara e acessível.
                    </p>
                </div>

                {/* Bloco de recurso 2 */}
                <div className="flex-shrink-0">
                    <Image
                        src="https://i.ibb.co/TPykH50/search.png"
                        alt="Descrição da imagem 2"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-left">
                    <h2 className="text-lg font-semibold mb-2">Pesquisa de Temas Específicos</h2>
                    <p className="text-gray-700">
                        Utilize a poderosa funcionalidade de pesquisa do LicitaX para explorar temas específicos em Horizonte-CE e Sobral-CE em determinados períodos. Nosso software, através do Querido Diário, rastreia e recupera citações desses temas nos diários oficiais, tornando as informações facilmente acessíveis.
                    </p>
                </div>

                {/* Bloco de recurso 3 */}
                <div className="flex-shrink-0">
                    <Image
                        src="https://i.ibb.co/cF8sCrF/down.png"
                        alt="Descrição da imagem 3"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-left">
                    <h2 className="text-lg font-semibold mb-2">Downloads de Documentos Específicos</h2>
                    <p className="text-gray-700">
                        Para maior conveniência, disponibilizamos downloads diretos de documentos específicos, como PDFs dos diários oficiais relacionados aos temas pesquisados.
                    </p>
                </div>
            </div>

            <div>
                {/* Espaço para o texto adicional ou rodapé */}
                <p className="text-gray-700">
                    Explore o LicitaX agora e mergulhe em uma experiência única de acesso simplificado e compreensão aprofundada das atividades licitatórias nos municípios cearenses. Descubra, pesquise e esteja sempre informado com o LicitaX!
                </p>
            </div>

            <div>
                <h1 className="p-4 text-2xl font-semibold">
                    Conheça um pouco mais sobre os desenvolvedores do projeto
                </h1>
                <section className="p-10 flex gap-y-6">
                    {members.map((member, index) => (
                        <Member key={index} {...member} />
                    ))}
                </section>
            </div>
        </div>
    );
};
