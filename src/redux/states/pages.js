import { HOME, ABOUT } from 'src/redux/types/routes'
import HomePage from 'src/pages/HomePage'
import AboutPage from 'src/pages/AboutPage'

export const initialState = HOME

export const pages = {
  [HOME]: HomePage,
  [ABOUT]: AboutPage
}
