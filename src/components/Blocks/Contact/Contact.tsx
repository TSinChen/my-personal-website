import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './style.module.scss'
import { RootReducerStateTypes } from '../../../type/reducers/rootReducer'
import apis from '../../../apis/apis'
import ICON_GITHUB from '../../../assets/image/icons/github.png'
import Button from '../../Utils/Button/Button'

const Contact = () => {
  const photoLink = useSelector((state: RootReducerStateTypes) => state.photo.link)
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('formName', formName)
    formData.append('formEmail', formEmail)
    formData.append('formMessage', formMessage)
    await apis.contact.postContact(formData)
  }
  return (
    <div className={styles.contact}>
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <div className={styles.contact__form__title}>留言給我</div>
        <div className={styles.contact__form__item}>
          <label className={styles.contact__form__item__label} htmlFor="name">
            名字 *
          </label>
          <input
            required
            className={styles.contact__form__item__input}
            type="text"
            id="name"
            name="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </div>
        <div className={styles.contact__form__item}>
          <label className={styles.contact__form__item__label} htmlFor="email">
            電子郵件 *
          </label>
          <input
            required
            className={styles.contact__form__item__input}
            type="text"
            id="email"
            name="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
          />
        </div>
        <div className={styles.contact__form__item}>
          <label className={styles.contact__form__item__label} htmlFor="message">
            訊息 *
          </label>
          <textarea
            required
            className={styles.contact__form__item__textarea}
            id="message"
            name="message"
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
          />
        </div>
        <Button type="submit">送出</Button>
      </form>
      <div className={styles.contact__info}>
        <img className={styles.contact__info__picture} src={photoLink} />
        <a className={styles.contact__info__email} href="mailto:sinin60076@gmail.com">
          sinin60076@gmail.com
        </a>
        <div className={styles.contact__info__icons}>
          <a
            className={styles.contact__info__icons__icon}
            href="https://github.com/TSinChen"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ICON_GITHUB} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
