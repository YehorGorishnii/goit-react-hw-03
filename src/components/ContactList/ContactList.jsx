import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactForm({contacts,onDelete}) {
  return (
    <ul className={css.list}>
      {contacts.map((item) => (
        <li key={item.id} className={css.user}>
          <Contact contact={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}