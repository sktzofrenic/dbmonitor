import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        showModal: false,
        activeDatabase: false
    },
    getters: {
        showModal: state => {
            return state.showModal
        },
        activeDatabase: state => {
            return state.activeDatabase
        }
    },
    mutations: {
        toggleModal: (state) => {
            state.showModal = !state.showModal
        },
        setActiveDatabase: (state, database) => {
            state.activeDatabase = database
        }
    },
    actions: {
        toggleModal: (context) => {
            context.commit('toggleModal')
        },
        setActiveDatabase: (context, payload) => {
            context.commit('setActiveDatabase', payload)
        }
    }
})
