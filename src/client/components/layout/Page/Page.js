import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { bool, object } from 'prop-types'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../Main'
import s from './Page.module.scss'

class Page extends Component {
  static propTypes = {
    showSidebar: bool.isRequired,
    setDarkTheme: bool.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  state = {
    linkInHeader: undefined,
  }

  componentWillMount() {
    this.setState({ linkInHeader: this.checkBodyWidth() })
    window.addEventListener('resize', this.onResize)
  }

  componentWillReceiveProps() {
    const { checkIsModal } = this
    const { location } = this.props

    if (!checkIsModal()) {
      this.prevLocation = location
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  prevLocation = () => {
    const { location } = this.props
    return location
  }

  checkBodyWidth = () => document.body.offsetWidth <= 776

  checkIsModal = () => {
    const { location } = this.props
    return location.state && location.state.isModal
  }

  onResize = () => {
    const { linkInHeader } = this.state
    const bodyIsNarrow = this.checkBodyWidth()

    if (linkInHeader !== bodyIsNarrow) {
      this.setState({ linkInHeader: bodyIsNarrow })
    }
  }

  render() {
    const { checkIsModal, prevLocation } = this
    const {
      showSidebar,
      setDarkTheme,
      location,
      history,
    } = this.props
    const { linkInHeader } = this.state

    const themeClassName = setDarkTheme ? s.darkTheme : s.lightTheme
    const currLocation = checkIsModal() ? prevLocation : location

    const sidebarClassNames = {
      enter: s.sidebarEnter,
      enterActive: s.sidebarEnterActive,
      exit: s.sidebarExit,
      exitActive: s.sidebarExitActive,
    }

    return (
      <div className={`${s.base} ${themeClassName}`}>
        <Header iconWithLink={linkInHeader} />
        <Main location={currLocation} />
        {
          linkInHeader
            ? (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  classNames={sidebarClassNames}
                  timeout={{ enter: 250, exit: 200 }}
                >
                  <Switch location={location}>
                    <Route
                      path="/sidebar"
                      render={
                        () => (
                          <Sidebar
                            locationPathName={currLocation.pathname}
                            goBack={history.goBack}
                          />
                        )
                      }
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
            : <Sidebar locationPathName={currLocation.pathname} showSidebar={showSidebar} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showSidebar: state.app.showSidebar,
  setDarkTheme: state.app.setDarkTheme,
})

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Page)
