import produce from "immer"

export const getActionMap = (reducer, namespace) => {
  return Object.keys(reducer).reduce((actionMap, actionName) => {
    actionMap[actionName] = namespace + '/' + actionName
    return actionMap
  }, {})
}

const getKey = (str, flag) => {
  const i = str.indexOf(flag)
  return str.substring(i + 1, str.length + 1)
}
export const handleActions = ({ state, action, reducers, namespace = '' }) =>
  Object.keys(reducers)
    .map(key => namespace + '/' + key)
    .includes(action.type)
    ? produce(state, draft => reducers[getKey(action.type, '/')](draft, action))
    : state
