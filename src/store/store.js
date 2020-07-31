import initialState from "./initialState";
import reducer from "./reducers/rootReducer";
import { createStore } from 'redux';

const store = createStore(reducer, initialState);

export default store;
