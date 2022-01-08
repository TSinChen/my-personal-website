import { ButtonHTMLAttributes } from 'react'
import cx from 'classnames'

import styles from './style.module.scss'

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: string
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
}

const Button = ({ type = 'button', children, disabled }: Props) => {
  return (
    <button
      className={cx(styles.button, disabled ? styles['button--disabled'] : {})}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
