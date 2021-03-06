import { useState } from 'react'
import cx from 'classnames'

import styles from './style.module.scss'
import { NAV_ITEMS } from '../../constants/navItems'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleJumpToAnchor = (id: keyof typeof NAV_ITEMS) => {
    setOpen(false)
    const headerHeight = document.getElementById('header')?.offsetHeight || 0
    const position = document.getElementById(id)?.offsetTop || headerHeight
    window.scroll({
      top: position - (open ? 0 : headerHeight),
      behavior: 'smooth',
    })
  }

  return (
    <header className={cx(styles.header, open ? styles.open : {})} id="header">
      <div className={cx(styles.header__toggle, open ? styles.open : {})} onClick={() => setOpen(!open)}>
        <div className={cx(styles.header__toggle__icon, open ? styles.open : {})} />
      </div>
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
