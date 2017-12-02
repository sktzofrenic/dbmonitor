import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        showModal: false,
        activeDatabase: false,
        modalData: {
            title: '',
            chartType: ''
        }
    },
    getters: {
        showModal: state => {
            return state.showModal
        },
        activeDatabase: state => {
            return state.activeDatabase
        },
        modalData: state => {
            return state.modalData
        }
    },
    mutations: {
        toggleModal: (state, modal) => {
            state.modalData = modal
            state.showModal = !state.showModal
        },
        setActiveDatabase: (state, database) => {
            state.activeDatabase = database
        }
    },
    actions: {
        toggleModal: (context, payload) => {
            context.commit('toggleModal', payload)
        },
        setActiveDatabase: (context, payload) => {
            context.commit('setActiveDatabase', payload)
        }
    }
})
