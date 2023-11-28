import { combineReducers, legacy_createStore as createStore } from 'redux';

import { DarkMoodReducer } from './darkmood/reducer/reducer';
import { TodoReducer } from './todo/reducer/reducer';

export interface RootState {
    todos: ReturnType<typeof TodoReducer>
    isDarkMood: ReturnType<typeof DarkMoodReducer>
}

export const store = createStore(combineReducers({ todos: TodoReducer, isDarkMood: DarkMoodReducer }));