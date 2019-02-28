import { initialState, pages } from "src/redux/states/pages"
import { NOT_FOUND } from "src/redux/types/routes"

export default (state = initialState, action = {}) =>
  pages[action.type] || pages[state]
