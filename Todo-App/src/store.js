import {todos} from './seed';

const state = {todos: todos};

const getters = {
    findTodos(state){
        return state.todos;

    }
};

const mutations = {
    ADD_TODO(state, payload){
        state.todos.push(payload);
    }
};

const actions = {
    addTodo(context, payload){
        context.commit('ADD_TODO', payload);
    }
};

export {state, getters, mutations, actions};