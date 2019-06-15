/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bool, string, func } from 'prop-types'

import { toggleSidebar } from '@actions/appActions'
import routes from './routes'

import s from './Sidebar.module.scss'

const Sidebar = ({
  locationPathName,
  showSidebar,
  goBack,
  toggleSidebarConnect,
}) => {
  const getLinkClassName = path => `${s.listItem} ${locationPathName === path ? s.isActive : ''}`
  const onNavClick = e => e.stopPropagation()
  const toggleTemplate = goBack || toggleSidebarConnect

  return (
    <div
      className={`${s.wrapper} ${showSidebar || goBack ? s.isShow : ''} ${goBack ? s.isFullscreen : ''}`}
      onClick={toggleTemplate}
    >
      <nav className={s.nav} onClick={onNavClick}>
        <ul className={s.list}>
          {
            Object.keys(routes).map((key) => {
              const route = routes[key]
              return (
                <Link key={key} to={key} className={getLinkClassName(`/${key}`)}>
                  <route.iconComponent className={s.listIcon} />
                  <span>{route.name}</span>
                </Link>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

Sidebar.propTypes = {
  locationPathName: string.isRequired,
  showSidebar: bool,
  goBack: func,
  toggleSidebarConnect: func.isRequired,
}

Sidebar.defaultProps = {
  showSidebar: false,
  goBack: undefined,
}

const mapDispatchToProps = ({
  toggleSidebarConnect: toggleSidebar,
})

export default connect(null, mapDispatchToProps)(Sidebar)
