import { ButtonHTMLAttributes } from 'react'
import cx from 'classnames'

import styles from './style.module.scss'
import { Theme } from '../../../type/global'

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: string
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  theme: Theme
  onClick?: () => void
}

const Button = ({ type = 'button', children, disabled, theme, onClick }: Props) => {
  return (
    <button
      className={cx(styles[`button--${theme}`], disabled ? styles[`button--${theme}--disabled`] : {})}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
