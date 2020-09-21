import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import okIcon from '../../assets/images/icons/ok.svg';
import cancelIcon from '../../assets/images/icons/cancel.svg';

import api from '../../services/api';

import './styles.css';

export interface Contact {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
}

interface ContactItemProps {
  contact: Contact;
}

const EditContact: React.FC<ContactItemProps> = ({ contact }) => {
  const history = useHistory();

  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ whatsapp, setWhatsapp] = useState('');

  function handleCreateContact(e: FormEvent) {
    e.preventDefault();

    api.put('edit/:{contact.id}', {
      name, 
      email,
      whatsapp,
    }).then(() => {
      alert('Contato alterado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro ao alterar!');
    })
  }

  return (
    <div id="page-edit-contact">
      <main>  
        <form onSubmit={handleCreateContact}>
        <fieldset>
          <legend>
            Dados do contato

            <button type="submit">
              <img src={okIcon} alt="Editar contato"/>
            </button>

            <Link to="/">
              <img src={cancelIcon} alt="Cancelar"/>
            </Link>
          </legend>

          <Input 
            name="name" 
            label="Nome completo" 
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <Input 
            name="email" 
            label="Email" 
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}  
          />
          <Input 
            name="whatsapp" 
            label="Whatsapp" 
            value={whatsapp}
            onChange={(e) => { setWhatsapp(e.target.value) }}
          />
          </fieldset>

          <footer>
            <p>
              Importante <br/>
              Preencha todos os dados
            </p>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default EditContact;