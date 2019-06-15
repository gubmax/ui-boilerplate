import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'

import { toggleSidebar } from '@actions/appActions'

import Search from '@elements/Search'
import { ReactComponent as MenuIcon } from '@images/icons/menu-24px.svg'
import { ReactComponent as TimerIcon } from '@images/icons/timer-24px.svg'
import { ReactComponent as NotificationsIcon } from '@images/icons/notifications-24px.svg'
import { ReactComponent as ProfileIcon } from '@images/icons/profile-24px.svg'
import s from './Header.module.scss'

class Header extends Component {
  static propTypes = {
    iconWithLink: bool.isRequired,
    toggleSidebarConnect: func.isRequired,
  }

  state = {
    isActiveTimer: false,
  }

  toggleTimer = () => {
    const { isActiveTimer } = this.state
    this.setState({ isActiveTimer: !isActiveTimer })
  }

  render() {
    const { toggleTimer } = this
    const { iconWithLink, toggleSidebarConnect } = this.props
    const { isActiveTimer } = this.state

    const timerIconClasses = `${s.icon} ${isActiveTimer ? s.isActive : ''}`
    const menuIconTemplate = (
      <MenuIcon
        className={s.sidebarIcon}
        onClick={toggleSidebarConnect}
        onKeyPress={toggleSidebarConnect}
        role="button"
        tabIndex={0}
      />
    )

    return (
      <header
        className={s.header}
      >
        {
          iconWithLink
            ? (
              <Link
                to={{
                  pathname: '/sidebar',
                  state: { isModal: true },
                }}
              >
                { menuIconTemplate }
              </Link>
            )
            : menuIconTemplate
        }
        <span className={s.title}>
          <span className={s.titleHighlight}>UI</span>
          Boilerplate
        </span>
        <Search className={s.search} />
        <div className={s.iconsBox}>
          <div
            className={s.spinnerWrapper}
            onClick={toggleTimer}
            onKeyPress={toggleTimer}
            role="button"
            tabIndex={0}
          >
            <TimerIcon className={timerIconClasses} />
            {
              isActiveTimer && <i className={s.spinner} />
            }
          </div>
          <NotificationsIcon className={s.icon} />
          <ProfileIcon className={s.icon} />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  showSidebar: state.app.showSidebar,
})

const mapDispatchToProps = ({
  toggleSidebarConnect: toggleSidebar,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
