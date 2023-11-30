import Image from "next/image";

export const Sobre = () => {
    return (
        <div className="flex">
            <div className="bg-[#7f1d1d]  w-80 h-screen p-4 text-white"> 
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
            <div>
                <h1 className="p-20 text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10">Conheça um pouco mais sobre os desenvolvedores do projeto</h1>
               <section className="p-10 flex flex-col gap-y-6">
                <p className="">
                    <strong>José André Rabelo:  </strong>
                      discente do curso de Engenharia de Software da UnB campus FGA
                </p>
                <p className=" font-normal">
                    <strong>Giovana Barbosa da Silva:  </strong>
                      discente do curso de Engenharia de Software da UnB campus FGA
                </p>
                <p className="font-normal">
                    <strong>Samara Leticia Alves:  </strong>
                      discente do curso de Engenharia de Software da UnB campus FGA
                </p>
                <p className="font-normal">
                    <strong>Julia Takaki Neves:  </strong>
                      discente do curso de Engenharia de Software da UnB campus FGA
                </p>
                <p className="font-normal">
                    <strong>Rafael Oliveira Bonach:  </strong>
                      discente do curso de Engenharia de Software da UnB campus FGA
                </p>
                </section>
            </div>
            <div>
            </div>
        </div>
    )
}