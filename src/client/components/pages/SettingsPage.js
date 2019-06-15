import React from 'react'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'

import { toggleDarkTheme } from '@actions/appActions'

import { Switch, List } from '@elements'

const SettingsPage = ({ setDarkTheme, toggleDarkThemeConnect }) => (
  <List text="Внешний вид">
    <Switch id="theme" checked={setDarkTheme} onClick={toggleDarkThemeConnect}>Темная тема</Switch>
    <Switch id="test" checked={setDarkTheme} onClick={() => {}}>Переключатель</Switch>
    <p>Элемент списка</p>
  </List>
)

SettingsPage.propTypes = {
  setDarkTheme: bool.isRequired,
  toggleDarkThemeConnect: func.isRequired,
}

const mapStateToProps = state => ({
  setDarkTheme: state.app.setDarkTheme,
})

const mapDispatchToProps = ({ toggleDarkThemeConnect: toggleDarkTheme })

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
