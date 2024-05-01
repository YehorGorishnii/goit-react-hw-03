import { Formik, Field, Form } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useState } from "react";

export default function ContactForm({addContact}) {
  const handleNewContactSubmit = (event) => {
    event.preventDefault()
    addContact({
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    })
    event.target.reset();
  };

  return (
    
      <form className={css.form} onSubmit={handleNewContactSubmit} >
        <div className={css.conteiner}>
          <label>Name</label>
          <input name="name" type="text" />
        </div>

        <div className={css.conteiner}>
          <label>Namber</label>
          <input name="number" type="phone" />
        </div>

        <button  className={css.button} type="submit">
          Add contact
        </button>
      </form>
  
  );
}
