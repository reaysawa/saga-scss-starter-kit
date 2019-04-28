import { HOME, NOT_FOUND } from 'src/redux/types/routes'
import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'

export const initialState = HOME

export const pathConstsToPages = {
  [HOME]: HomePage,
  [NOT_FOUND]: NotFoundPage
}

export const pathConstsToPaths = {
  [HOME]: '/',
  [NOT_FOUND]: '/404'
}
