import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { nanoid } from "nanoid";

const Validator = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required(
    "Write your name!"),
    
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required(
      "Write your number!"),
});


export default function ContactForm({ addContact }) {
  const handleNewContactSubmit = (values, action) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    addContact(newContact);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id : "",
        name: "",
        number: "",
      }}
      onSubmit={handleNewContactSubmit}
      validationSchema={Validator}
    >
      <Form className={css.form}>
        <div className={css.conteiner}>
          <label>Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" className={css.error}/>
        </div>

        <div className={css.conteiner}>
          <label>Number</label>
          <Field name="number" type="phone" />
          <ErrorMessage name="number" component="span" className={css.error}/>
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
