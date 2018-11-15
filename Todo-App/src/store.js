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
    },
    COMPLETE_TODO(state, payload){
        const index = state.todos.findIndex(todo => todo.id === payload.id);
        state.todos[index].completed = true;
    },
    DELETE_TODO(state, payload){
        const index = state.todos.findIndex(todo => todo.id === payload.id);
        state.todos.splice(index, 1);
    }
};

const actions = {
    addTodo(context, payload){
        context.commit('ADD_TODO', payload);
    },
    completeTodo(context, payload){
        context.commit('COMPLETE_TODO',  payload);
    },
    deleteTodo(context, payload){
        context.commit('DELETE_TODO', payload);
    }
};

export {state, getters, mutations, actions};