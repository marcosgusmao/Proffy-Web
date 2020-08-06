import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars3.githubusercontent.com/u/53795798?s=60&v=4"
        alt="Marcos Gusmão"
      />
      <div>
        <strong>Marcos Gusmão</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das
      pessoas atráves de experiências.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
