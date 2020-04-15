import React, { useEffect } from "react";

const ContactPage = ({ login }) => {
  useEffect(() => {
    login(localStorage.getItem("token"));
  }, [login]);

  return (
    <div>
      <h2>Contact</h2>
      <span>Developed by DuDeS</span>
      <address>
        <strong>E-mail:</strong>{" "}
        <a href="mailto:tsvirko.nikita@gmail.com">tsvirko.nikita@gmail.com</a>
      </address>
    </div>
  );
};

export default ContactPage;
