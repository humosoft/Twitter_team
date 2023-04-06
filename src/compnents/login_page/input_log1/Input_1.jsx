import React, { useState } from "react";
import "./Input.scss";

export default function Input_1() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(regMail.test(email)){
      setMessage("Email is true")
    }
   else if (!regMail.test(email) && email !== "") {
      setMessage("Email is not true");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="wrapper">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleOnChange}
        />
        <button onClick={emailValidation}>Check</button>
        {message}
      </div>
    </div>
  );
}
