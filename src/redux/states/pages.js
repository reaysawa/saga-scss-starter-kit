import { HOME, NOT_FOUND } from 'src/redux/types/routes'
import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'

export const initialState = NOT_FOUND

export const pages = {
  [HOME]: HomePage,
  [NOT_FOUND]: NotFoundPage
}
