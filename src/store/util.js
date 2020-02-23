import produce from "immer"

export const getActionMap = (reducer, namespace) => Object.keys(reducer)
  .reduce((actionMap, actionName) => ({
    ...actionMap,
    [actionName]: namespace + '/' + actionName
  }), {})

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

export const formatModel = ({ state, action, reducer, namespace = '' }) =>
  Object.keys(reducer)
    .map(key => namespace + '/' + key)
    .includes(action.type)
    ? produce(state, draft => reducer[getKey(action.type, '/')](draft, action))
    : state

export const handleEffect = (effect = {}) => {

}


export const createModel = (model) => {
  const { reducer, namespace } = model
  const fn = (state = model.state, action) => formatModel({
    state,
    action,
    reducer,
    namespace
  })
  // 通过 reducer 的函数名 生成对应的 action，
  fn.action = getActionMap(reducer, namespace)
  return fn
}
