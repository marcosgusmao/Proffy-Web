import React from 'react';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warnigIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

const TeacherForm: React.FC = () => (
  <div id="page-teacher-form" className="container">
    <PageHeader
      title="Que incrivel que você quer dar aulas."
      description="O primeiro passo é preencher esse formulário de inscrição"
    />

    <main>
      <fieldset>
        <legend>Seus Dados</legend>

        <Input name="name" label="Nome completo" />
        <Input name="avatar" label="Avatar" />
        <Input name="Whatsapp" label="Whatsapp" />
        <Textarea name="Bio" label="Biografia" />
      </fieldset>

      <fieldset>
        <legend>Sobre a Aula</legend>

        <Select
          name="subject"
          label="Matéria"
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Educação Física', label: 'Educação Física' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'História', label: 'História' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Quimica', label: 'Quimica' },
          ]}
        />

        <Input name="cost" label="Custo da sua hora por aula" />
      </fieldset>

      <fieldset>
        <legend>Horários disponíveis</legend>

        <Input name="name" label="Nome completo" />
        <Input name="avatar" label="Avatar" />
        <Input name="Whatsapp" label="Whatsapp" />
      </fieldset>

      <footer>
        <p>
          <img src={warnigIcon} alt="Aviso Importante" />
          Importante! <br />
          Preencha todos os dados
        </p>
        <button type="button">Salvar cadastro</button>
      </footer>
    </main>
  </div>
);

export default TeacherForm;
