import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reduncers/tarefas'
import filtroReducer from './reduncers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
