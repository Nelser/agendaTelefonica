import React from 'react';

import { Link } from 'react-router-dom';

import editIcon from '../../assets/images/icons/writing.svg';
import delIcon from '../../assets/images/icons/lixo.svg';

import api from '../../services/api';

export interface Contact {
  id: number,
  name: string;
  whatsapp: string;
}

interface ContactItemProps {
  contact: Contact;
}
  
const contactItem: React.FC<ContactItemProps> = ({ contact }) => {

  function deleteContact() {
    api.delete(':{contact.id}').then(() => {
      alert('Contato excluído com sucesso!');
    }).catch(() => {
      alert('Erro ao excluir!');
    })
  }

  return (
    <article className="contact-item">
      <header>
        <strong>{contact.name}</strong>
        <div className="actions-container">
            <Link to="/edit" className="edit">
              <img src={editIcon} alt="Editar"/>
            </Link>
            <button type="submit" onClick={deleteContact}>
              <img src={delIcon} alt="Deletar"/>
            </button>
          </div>
      </header>
  </article>
  );
}

export default contactItem;
