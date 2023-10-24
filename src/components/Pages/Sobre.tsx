import Image from "next/image";

export const Sobre = () => {
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
        </div>
    )
}