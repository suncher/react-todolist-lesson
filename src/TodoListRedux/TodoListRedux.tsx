import React from 'react';
import AddColumn from './AddColumn/AddColumn';
import { Provider } from 'react-redux';
import Column from './Column'
import { store } from '../app/store';

const TodoListRedux = () => {
    return <Provider store={store}><div><AddColumn />
    <Column /></div></Provider>;
};

export default TodoListRedux;
