import Vue from 'vue'
import Vuex from 'vuex'
import news from '@/Vuex/news'
import users from '@/Vuex/users'

Vue.use(Vuex)

export  default  new Vuex.Store({
    modules: {
        news,
        users,
    }
});