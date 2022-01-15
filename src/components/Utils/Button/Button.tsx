import { ButtonHTMLAttributes } from 'react'
import cx from 'classnames'

import styles from './style.module.scss'
import { Theme } from '../../../type/global'

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: string
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  theme: Theme
}

const Button = ({ type = 'button', children, disabled }: Props) => {
  return (
    <button
      className={cx(styles[`button--${theme}`], disabled ? styles['button--disabled'] : {})}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
