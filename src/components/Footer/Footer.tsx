import dayjs from 'dayjs'

import styles from './style.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <a className={styles.footer__link} href="mailto:sinin60076@gmail.com">
        sinin60076@gmail.com
      </a>
      <span className={styles.footer__copyright}>
        &copy;
        <a
          className={styles.footer__copyright__link}
          href="https://github.com/TSinChen"
          target="_blank"
          rel="noreferrer"
        >
          TSinChen
        </a>
        {dayjs().year()}
      </span>
    </footer>
  )
}

export default Footer
