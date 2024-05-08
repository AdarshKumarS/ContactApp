import React from "react";
import user from "../images/user.png";


const ContactCard = (contactInfo) => { // data passing from other components via props object
    
    const {id, name, email } = contactInfo.contacts;

        return(
            <div className="item">
                <img className="ui avatar image" src={user}  alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="">{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px",cursor:"pointer"}} onClick={() => contactInfo.getId(id)}></i>
            </div>
        )
};

export default ContactCard; 
