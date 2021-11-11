import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alerText: '',
    users: [],
    alertContact: false
  },
  getters: {
    getUsers: state => {
        return state.users;
    },
    getAlertText : state => {
      return state.alerText
    },
    getAlertContact : state =>{
      return state.alertContact
    },
}
})
