import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const renderlist = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });
  return (
    <div>
      <div className="ui celled list">{renderlist}</div>
    </div>
  );
}
