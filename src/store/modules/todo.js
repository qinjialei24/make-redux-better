import { handleActions, getActionMap } from "../util";

const initialState = {
  inputValue: '123',
  list: []
}
const reducers = {
  add(state, action) {
    state.list.push(action.data)
  },
  delete(state, action) {
    state.list.splice(action.data, 1)
  },
  changeInput(state, action) {
    state.inputValue = action.data
  }
}

const fn = (state = initialState, action) => handleActions({
  state,
  action,
  reducers,
  namespace: 'todo'
})

fn.action = getActionMap(reducers, 'todo')
console.log("TCL: fn.action", fn.action)

export default fn