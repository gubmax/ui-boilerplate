import React, { Component } from 'react'
import { string } from 'prop-types'

import { ReactComponent as SearchIcon } from '@images/icons/search-24px.svg'
import { ReactComponent as ClearIcon } from '@images/icons/clear-24px.svg'
import s from './Search.module.scss'

class Search extends Component {
  static propTypes = {
    className: string,
  }

  static defaultProps = {
    className: '',
  }

  state = {
    showCleanBtn: false,
  }

  componentDidMount() {
    this.refInput.addEventListener('input', this.onInput)
  }

  componentWillUnmount() {
    this.refInput.removeEventListener('input', this.onInput)
  }

  onInput = () => {
    const { showCleanBtn } = this.state
    const { length } = this.refInput.value
    const setState = (bool) => { this.setState({ showCleanBtn: bool }) }

    if (length && !showCleanBtn) {
      setState(true)
    } else if (length === 0) {
      setState(false)
    }
  }

  clearInputValue = () => {
    this.refInput.value = ''
    this.setState({ showCleanBtn: false })
  }

  render() {
    const { clearInputValue } = this
    const { className } = this.props
    const { showCleanBtn } = this.state

    return (
      <div className={`${s.wrapper} ${className}`}>
        <SearchIcon className={`${s.icon} ${s.searchIcon}`} />
        <input
          type="text"
          className={s.input}
          ref={(c) => { this.refInput = c }}
          placeholder="Введите поисковой запрос"
        />
        {
          showCleanBtn
            && (
              <ClearIcon
                className={`${s.icon} ${s.clearIcon}`}
                onClick={clearInputValue}
                onKeyPress={clearInputValue}
                role="button"
                tabIndex={0}
              />
            )
        }
      </div>
    )
  }
}

export default Search
