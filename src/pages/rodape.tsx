import React from 'react';

interface FooterProps {
  // espaço para propriedades necessárias para o rodapé
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <div style={{ float: 'left' }}>
        [Lateral do Site]
      </div>
      <div style={{ float: 'right' }}>
        <img src="[public/logobranca.svg]" alt="Logo" />
        <p>
          Todo o código produzido é aberto e distribuído de forma livre no repositório
          (unb-mds/2023-2-Squad07).
        </p>
      </div>
    </div>
  );
};

export default Footer;