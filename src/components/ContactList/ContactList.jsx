import React, { useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";

import axios from "axios";

function ContactList({ setFeaturedUser }) {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      .then((data) => {
        setContacts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setFeaturedUser={setFeaturedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
