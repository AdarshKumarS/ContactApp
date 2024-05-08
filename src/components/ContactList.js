import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (contactData) => {  // data passing from other components via props object

    const getId = (id) =>{
        contactData.getIdForDelete(id);
    }

    const renderedContactList = contactData.contacts.map((contact) => {
        return <ContactCard contacts={contact} getId={getId} />
    })

    return (
        <div className="main">
            <h2>ContactList
                <Link to="/add-contact">
                <button className="ui button blue right">Add Contacts</button>
                </Link>
            </h2>
        <div className="ui celled list">
            {renderedContactList}
        </div>
        </div>
    )
};

export default ContactList;