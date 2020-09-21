import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import okIcon from '../../assets/images/icons/ok.svg';
import cancelIcon from '../../assets/images/icons/cancel.svg';

import api from '../../services/api';

import './styles.css';

function AddContact() {
  const history = useHistory();

  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ whatsapp, setWhatsapp] = useState('');

  function handleCreateContact(e: FormEvent) {
    e.preventDefault();

    api.post('add', {
      name, 
      email,
      whatsapp
    }).then(() => {
      alert('Contato criado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro ao criar!');
    })
  }

  return (
    <div id="page-add-contact">
      <main>
        <form onSubmit={handleCreateContact}>
        <fieldset>
            <legend>  
              Dados do contato 

              <button type="submit">
                <img src={okIcon} alt="Criar contato"/>
              </button>
              
              <a href="http://localhost:3000/">
                <img src={cancelIcon} alt="Voltar ao home"/>
              </a> 
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
  )
}

export default AddContact;