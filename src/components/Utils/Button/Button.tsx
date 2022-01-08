import { ButtonHTMLAttributes } from 'react'

import styles from './style.module.scss'

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: string
}

const Button = ({ type = 'button', children }: Props) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  )
}

export default Button
