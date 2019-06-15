import { ReactComponent as ProjectsIcon } from '@images/icons/projects-24px.svg'
import { ReactComponent as ReviewIcon } from '@images/icons/review-24px.svg'
import { ReactComponent as CalendarIcon } from '@images/icons/calendar-24px.svg'
import { ReactComponent as InfoIcon } from '@images/icons/info-24px.svg'
import { ReactComponent as SettingsIcon } from '@images/icons/settings-24px.svg'

export default {
  '': {
    name: 'Проекты',
    iconComponent: ProjectsIcon,
  },
  calendar: {
    name: 'Календарь',
    iconComponent: CalendarIcon,
  },
  review: {
    name: 'Обзор',
    iconComponent: ReviewIcon,
  },
  info: {
    name: 'Информация',
    iconComponent: InfoIcon,
  },
  settings: {
    name: 'Настройки',
    iconComponent: SettingsIcon,
  },
}
