import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";

export default function ContactList({ contact }) {
  const { name, number } = contact;

  return (
    <>
      <div>
        <p className={css.text}>
          <BsFillPersonFill className={css.icon}/>
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.button}>Delete</button>
    </>
  );
}
