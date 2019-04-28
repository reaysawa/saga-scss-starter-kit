import {
  initialState,
  pathConstsToPages as pages
} from "src/redux/states/pages"

export default (_, action = {}) => pages[action.type] || pages[initialState]
