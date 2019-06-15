import React from 'react'
import { string, node, func } from 'prop-types'

import s from './Button.module.scss'

const Button = ({
  children,
  type,
  className,
  onClick,
}) => (
  <button
    className={`${s.btn} ${s[type]} ${className}`}
    type="button"
    onClick={onClick}
  >
    { children }
  </button>
)

Button.propTypes = {
  className: string,
  type: string,
  children: node.isRequired,
  onClick: func,
}

Button.defaultProps = {
  className: '',
  type: 'default',
  onClick: () => {},
}

export default Button
