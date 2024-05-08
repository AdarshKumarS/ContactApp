import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  const Local_Storage_Key = "contacts";
  const [ contacts, setContacts ] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id : Math.floor(Math.random() * 99999), ...contact}]);
  }

  const getIdForDelete = (id) => {
    const filteredContacts = contacts.filter(contact =>{
        return contact.id !== id;
    });

    setContacts(filteredContacts);
  }
 
  useEffect(() => {
    const reterivedContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(reterivedContacts.length > 0) setContacts(reterivedContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key,JSON.stringify(contacts));
  },[contacts]); 

 

  return (
    <div className='ui container'>  
    <Router>
    <Header />
    <div style={{height:"50px"}}></div> 
      <Routes>
        <Route
        path='/'
        exact
        element={
          <ContactList 
          contacts={contacts} 
          getIdForDelete={getIdForDelete}
          />}
        />
      
        <Route
        path='/add-contact'
        exact
        element={
          <AddContact 
          addContactHandler={addContactHandler}
          />} 
        />
      </Routes>
    </Router>
 
      {/* <AddContact addContactHandler={addContactHandler}/> */}
       {/* "props" addContactHandler passing as a function  */}
      {/* <ContactList contacts={contacts} getIdForDelete={getIdForDelete}/> */}
       {/* "props" contacts array is passing  */}
    </div>
  );
}

export default App;
