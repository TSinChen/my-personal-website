import React from 'react'
import cx from 'classnames'

import { Theme } from '../../../type/global'
import styles from './style.module.scss'

type Props = {
  theme: Theme
  title: string
  children: React.ReactNode
}

const Block = ({ theme, title, children }: Props) => {
  const themeStyle = theme === 'dark' ? styles['block--dark'] : styles['block--light']

  return (
    <div className={cx(styles.block, themeStyle)} id={title}>
      <h2 className={styles.block__title}>{title}</h2>
      {children}
    </div>
  )
}

export default Block
