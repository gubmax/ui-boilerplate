import React from 'react'
import { string, object } from 'prop-types'

import Block from '@elements/Block'
import s from './Card.module.scss'
import tags from './tags'

const Card = ({ className, data }) => (
  <Block className={`${s.card} ${className}`}>
    {
      data.tags && (
        <div className={s.tags}>
          {
            data.tags.map((tagId) => {
              const currTag = tags[tagId]
              return <span key={tagId} className={`${s.tag} ${currTag.className}`}>{currTag.text}</span>
            })
          }
        </div>
      )
    }
    <span className={s.title}>{data.title}</span>
    <p className={s.text}>{data.text}</p>
  </Block>
)

Card.propTypes = {
  className: string,
  data: object.isRequired,
}

Card.defaultProps = {
  className: '',
}

export default Card
