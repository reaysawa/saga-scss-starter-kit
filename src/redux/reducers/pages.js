import { initialState, pages } from "src/redux/states/pages"

export default (state = initialState, action = {}) =>
  pages[action.type] || pages[state]
