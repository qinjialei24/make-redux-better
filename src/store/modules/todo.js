import { handleActions, getActionMap, createModel } from "../util";

// const initialState = {
//   inputValue: '123',
//   list: []
// }
// const reducers = {
//   add(state, action) {
//     state.list.push(action.data)
//   },
//   delete(state, action) {
//     state.list.splice(action.data, 1)
//   },
//   changeInput(state, action) {
//     state.inputValue = action.data
//   }
// }

// const fn = (state = initialState, action) => handleActions({
//   state,
//   action,
//   reducers,
//   namespace: 'todo'
// })

// fn.action = getActionMap(reducers, 'todo')
// export default fn



// 定义需要管理的状态
const model = {
  namespace: 'todo',//命名空间
  state: {
    inputValue: '123',
    list: []
  },
  reducer: {//操作 state 内的变量，必须是 纯函数 ，不能存放带有异步的代码
    add(state, action) {
      state.list.push(action.data)
    },
    delete(state, action) {
      state.list.splice(action.data, 1)
    },
    changeInput(state, action) {
      state.inputValue = action.data
    },
  },
  effect: {
    asyncAdd(reducer, payload) {
      setTimeout(() => {
        reducer.add({
          payload: '222'
        })
      }, 1000);
    }
  }
}

export default createModel(model)