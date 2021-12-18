import styles from './style.module.scss'
import { NAV_ITEMS } from '../../constants/navItems'

const Header = () => {
  const handleJumpToAnchor = (id: keyof typeof NAV_ITEMS) => {
    const headerHeight = document.getElementById('header')?.offsetHeight || 0
    const position = document.getElementById(id)?.offsetTop || headerHeight
    window.scroll({
      top: position - headerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <header className={styles.header} id="header">
      <ul className={styles.header__navbar}>
        {Object.values(NAV_ITEMS).map((item) => (
          <li key={item} className={styles.header__navbar__item} onClick={() => handleJumpToAnchor(item)}>
            {item}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
