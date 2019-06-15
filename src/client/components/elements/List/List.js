import React, { Children, cloneElement } from 'react'
import { string, node } from 'prop-types'

import Block from '../Block'
import s from './List.module.scss'

const List = ({ className, text, children }) => {
  const addClassToChild = (child) => {
    const { className: childClassName } = child.props

    const props = {
      className: childClassName ? `${s.listItem} ${childClassName}` : s.listItem,
    }

    return (
      <div className={s.listItemWrapper}>
        {cloneElement(child, props)}
      </div>
    )
  }

  return (
    <>
      {
        text && <span className={s.text}>{text}</span>
      }
      <Block className={`${s.list} ${className}`}>
        {
          Children.map(children, child => addClassToChild(child))
        }
      </Block>
    </>
  )
}

List.propTypes = {
  className: string,
  text: string,
  children: node.isRequired,
}

List.defaultProps = {
  text: '',
  className: '',
}

export default List
