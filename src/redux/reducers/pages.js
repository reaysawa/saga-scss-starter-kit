import { initialState, pages } from "src/redux/states/pages"

const rudyPrefixLen = "@@redux-first-router/".length
export default (state = initialState, action = {}) => {
  //console.log('LOG' + action.type.substring(rudyPrefixLen))
  return pages[action.type.substring(rudyPrefixLen)] || pages[state]
}
