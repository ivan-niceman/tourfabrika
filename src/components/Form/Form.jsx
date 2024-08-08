import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactsMessage from '../ContactsMessage/ContactsMessage';
import Preloader from '../Preloader/Preloader';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;
    if (name === 'tel') {
      updatedValue = value.replace(/[^\d]/g, '');
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
    if (isSubmittedOnce) {
      validateField(name, updatedValue);
    }
  };

  const handleTelFocus = (e) => {
    let { value } = e.target;
    if (!value.startsWith('7')) {
      value = '7' + value;
      setFormData({ ...formData, tel: value });
    }
  };

  const handleTelBlur = (e) => {
    let { value } = e.target;
    if (value === '7') {
      value = '';
      setFormData({ ...formData, tel: value });
    }
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors[name] = 'Введите имя';
        } else {
          delete errors[name];
        }
        break;
      case 'tel':
        if (!value.trim()) {
          errors[name] = 'Введите номер телефона';
        } else if (!/^7\d{10}$/.test(value)) {
          errors[name] = 'Не правильный формат номера телефона';
        } else {
          delete errors[name];
        }
        break;
      case 'email':
        if (!value.trim()) {
          errors[name] = 'Введите электронную почту';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors[name] = 'Не правильный формат электронной почты';
        } else {
          delete errors[name];
        }
        break;
      case 'message':
        if (!value.trim()) {
          errors[name] = 'Введите текст';
        } else {
          delete errors[name];
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Введите имя';
    }
    if (!formData.tel.trim()) {
      errors.tel = 'Введите номер телефона';
    } else if (!/^7\d{10}$/.test(formData.tel)) {
      errors.tel = 'Не правильный формат. Пример: 7999999999';
    }
    if (!formData.email.trim()) {
      errors.email = 'Введите электронную почту';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Не правильный формат электронной почты';
    }
    if (!formData.message.trim()) {
      errors.message = 'Введите текст';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittedOnce(true);

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch('./php/form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString(),
        });
        if (response.ok) {
          setFormSubmitted(true);
          setFormData({ name: '', tel: '', email: '', message: '' });
        } else {
          console.error('Ошибка отправки данных');
        }
      } catch (error) {
        console.error('Ошибка:', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="form-section" id="form-section">
      <div className="form-container">
        <h2 className="form-title">бесплатный подбор тура</h2>
        <form id="form" className="form" onSubmit={handleFormSubmit} noValidate>
          <label className="form__label">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="form__input"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="form__error">{formErrors.name}</span>
          </label>
          <label className="form__label">
            <input
              type="tel"
              name="tel"
              placeholder="Телефон"
              className="form__input"
              value={formData.tel}
              onFocus={handleTelFocus}
              onBlur={handleTelBlur}
              onChange={handleInputChange}
            />
            <span className="form__error">{formErrors.tel}</span>
          </label>
          <label className="form__label">
            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              className="form__input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="form__error">{formErrors.email}</span>
          </label>
          <label className="form__label">
            <textarea
              name="message"
              placeholder="Комментарий"
              className="form__input form__textarea"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <span className="form__error">{formErrors.message}</span>
          </label>
          <button type="submit" aria-label="отправить" className="form__button">
            {loading ? <Preloader /> : `Отправить`}
          </button>
          <p className="privacy-text">
            Нажимая на кнопку, вы даете согласие, что ознакомлены c
            <Link to="/privacy"> политикой конфиденциальности</Link>
          </p>
        </form>
        <ContactsMessage formSubmitted={formSubmitted} />
      </div>
    </section>
  );
}
