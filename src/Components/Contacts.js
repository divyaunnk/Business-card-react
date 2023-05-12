import React from "react";

function Contacts(props) {
  console.log(props);
  return (

      <div className="contact-card">
        <img className="image-res" src={props.img} alt="description" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <p>{props.email}</p>
        </div>
    </div>
  );
}

export default Contacts;
