import { useEffect } from "react";
import ok from "../../images/good.svg";

// eslint-disable-next-line react/prop-types
export default function ContactsMessage({ formSubmitted }) {
  useEffect(() => {
    const contactsBlock = document.querySelector(".contacts-block");
    if (formSubmitted) {
      contactsBlock.classList.add("active-form");

      setTimeout(() => {
        contactsBlock.classList.remove("active-form");
      }, 2000);
    }
  }, [formSubmitted]);

  return (
    <div className="contacts-block">
      <div className="contacts-message">
        <img src={ok} alt="Сообщение" />
        <h3 className="contacts-info">Ваша заявка принята!</h3>
      </div>
    </div>
  );
}
