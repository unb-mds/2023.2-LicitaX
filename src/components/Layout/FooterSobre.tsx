import Image from "next/image";
import Link from "next/link";

export const FooterSobre = () => {
  return (
    <div className="bg-[#410c0c] h-32 flex items-center justify-between p-4" >
      <div className="flex items-center">
        {/* Logo da Aplicação */}
        <Image
          alt="logo-unb"
          width={240}
          height={240}
          src="https://i.pinimg.com/originals/84/a7/86/84a786798c453d6a536f31cba73e5409.png"
        />
      </div>
      <div className="flex space-x-4">
      <p className="text-white font-bold mt-4 mb-4">O projeto LicitaX é uma iniciativa desenvolvida por alunos da Universidade de Brasília - UnB como parte da disciplina de Métodos de Desenvolvimento de Software. </p>
      <p className="text-white tahoma mt-4 mb-4">Todo o código produzido é aberto e distribuído de forma livre no repositório (unb-mds/2023-2-Squad07).</p>
      </div>
    </div>
  );
}