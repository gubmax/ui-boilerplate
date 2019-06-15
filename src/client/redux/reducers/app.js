const initialState = {
  showSidebar: false,
  setDarkTheme: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APP_TOGGLE_SIDEBAR':
      return { ...state, showSidebar: !state.showSidebar }
    case 'APP_TOGGLE_DARK_THEME':
      return { ...state, setDarkTheme: !state.setDarkTheme }
    default:
      return state
  }
}
