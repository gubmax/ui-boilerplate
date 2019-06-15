import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { object } from 'prop-types'

import routes from './routes'
import s from './Main.module.scss'

const Main = ({ location }) => {
  const routeTransitionClasses = {
    enter: s.routeEnter,
    enterActive: s.routeEnterActive,
    exit: s.routeExit,
    exitActive: s.routeExitActive,
  }

  return (
    <main className={s.main}>
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames={routeTransitionClasses}
          timeout={250}
        >
          <Switch location={location}>
            {
              routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={() => (
                    <div className={s.wrapper}>
                      <route.component />
                    </div>
                  )}
                />
              ))
            }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  )
}

Main.propTypes = {
  location: object.isRequired,
}

export default Main
