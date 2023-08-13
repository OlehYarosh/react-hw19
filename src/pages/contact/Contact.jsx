import React from "react";
import ContactList from "./contactComponents/ContactList";
import "../../styles/ContactList.css"

const Contact = () => {
    return (
        <div className="contact-page">
            <ContactList />
        </div>
    )
}

export default Contact;