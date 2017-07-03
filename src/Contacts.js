import React from 'react';
import './index.css';

function Contacts(props) {


    const contacts=props.contacts;
    return (
     <div>
       <ol className='contact-list'>
          {contacts.map(people => (
            <li key={people.id} className="contact-list-item">
            <div className="contact-avatar" style={{backgroundImage:`url(${people.avatarURL})`}}/> 
            <div className="contact-details">
              <p>{people.name}</p>
              <p>{people.email}</p>
            </div>
            <button className='contact-remove' onClick={()=>props.deleteContact(people)}>
              Remove
            </button>
            </li>
           ))}
        </ol>
     </div>
    );
  
}

export default Contacts;