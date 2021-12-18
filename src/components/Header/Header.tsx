import styles from './style.module.scss'

const NAV_ITEMS = ['home', 'about', 'education', 'skills', 'portfolios', 'contact']

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__navbar}>
        {NAV_ITEMS.map((item) => (
          <li key={item} className={styles.header__navbar__item}>
            {item}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
