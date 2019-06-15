import React from 'react'
import {
  string,
  node,
  bool,
  func,
} from 'prop-types'

import s from './Switch.module.scss'

const Switch = ({
  className,
  id,
  children,
  checked,
  onClick,
}) => (
  <label className={`${s.switch} ${className}`} htmlFor={id}>
    <span className={s.text}>{ children }</span>
    <input
      className={s.input}
      type="checkbox"
      id={id}
      defaultChecked={checked}
      onClick={onClick}
    />
    <span className={s.slider} />
  </label>
)

Switch.propTypes = {
  className: string,
  id: string.isRequired,
  children: node.isRequired,
  checked: bool,
  onClick: func.isRequired,
}

Switch.defaultProps = {
  className: '',
  checked: false,
}

export default Switch
