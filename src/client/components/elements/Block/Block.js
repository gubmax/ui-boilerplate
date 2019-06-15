import React from 'react'
import { string, node, oneOfType } from 'prop-types'

import s from './Block.module.scss'

const Block = ({ className, children }) => (
  <div className={`${s.block} ${className}`}>{children}</div>
)

Block.propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
}

Block.defaultProps = {
  className: '',
}

export default Block
