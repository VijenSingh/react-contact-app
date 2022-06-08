import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_Key = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHander = (contact) => {
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(LOCAL_Key));

    if (res) {
      setContacts(res);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_Key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHander={addContactHander} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
