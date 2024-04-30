import { Formik, Field, Form } from "formik";
import css from "../ContactForm/ContactForm.module.css";

export default function ContactForm() {
  return (
    <Formik>
      <Form className={css.form}>
        <div className={css.conteiner}>
          <label>Name</label>
          <Field name="name" type="text" />
        </div>

        <div className={css.conteiner}>
          <label>Namber</label>
          <Field name="phone" type="phone" />
        </div>

        <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
