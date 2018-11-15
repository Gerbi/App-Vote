import {todos} from './seed';

const state = {todos: todos};

const getters = {
    findTodos(state){
        return state.todos;

    }
};

const mutations = {};

const actions = {};

export {state, getters, mutations, actions};