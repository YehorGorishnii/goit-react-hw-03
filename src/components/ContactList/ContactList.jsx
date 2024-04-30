import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactForm({contacts}) {
  return (
    <ul className={css.list}>
      {contacts.map((item) => (
        <li key={item.id} className={css.user}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}