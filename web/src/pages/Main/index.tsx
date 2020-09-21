import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactItem, { Contact } from '../../components/ContactItem';

import addIcon from '../../assets/images/icons/contactGreen.svg';
import searchIcon from '../../assets/images/icons/search.svg';

import api from '../../services/api';

import './styles.css';

function Main() {
  const [ contacts, setContacts] = useState([]);
  
  const [ name ] = useState('');

  async function searchContacts(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('', {
      params: {
        name
      }
    })

    setContacts(response.data);
  }

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <main className="contacts-list">
          {/* <img  }
            src={landingImg} 
            alt="Plataforma de estudos" 
            className="hero-image"
          /> */}

          <div className="search-bar">
            <form onSubmit={searchContacts}>

              <button type="submit">
                <img src={searchIcon} alt="Procurar contatos"/>
              </button>
            </form>

            <Link to="/add" className="add">
              <img src={addIcon} alt="Adicionar"/>
            </Link>
          </div>

          
          {contacts.map((contact: Contact) => {
            return <ContactItem key={contact.id} contact={contact}/>;
          })}
        </main>

      </div>
    </div>
  )
}

export default Main;