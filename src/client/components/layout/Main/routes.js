import * as pages from '@pages'

const routes = [
  {
    path: '/',
    exact: true,
    component: pages.ProjectsPage,
  },
  {
    path: '/calendar',
    exact: true,
    component: pages.CalendarPage,
  },
  {
    path: '/review',
    exact: true,
    component: pages.ReviewPage,
  },
  {
    path: '/info',
    exact: true,
    component: pages.InfoPage,
  },
  {
    path: '/settings',
    exact: true,
    component: pages.SettingsPage,
  },
]

export default routes
