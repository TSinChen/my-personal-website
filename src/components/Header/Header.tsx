import styles from './style.module.scss'

import { NAV_ITEMS } from '../../constants/navItems'

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
