import {createStore, applyMiddleware } from 'redux';
import reducer from './ducks/getChores';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware( promiseMiddleware() ));