import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        showModal: false
    },
    getters: {
        showModal: state => {
            return state.showModal
        }
    },
    mutations: {
        toggleModal: (state) => {
            state.showModal = !state.showModal
        }
    },
    actions: {
        toggleModal: (context) => {
            context.commit('toggleModal')
        }
    }
})
