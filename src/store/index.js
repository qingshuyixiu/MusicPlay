import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginInfo: null,
        token: null
    },
    getters: {
        tokens(state) {
            let tok = state.token;
            if (!tok) {
                tok = sessionStorage.getItem('token');
                if (!tok) {
                    tok = document.cookie.substr(6);
                }
            }
            return tok;
        },
        loginUser(state) {
            let user = state.loginInfo;
            if (!user) {
                let a = sessionStorage.getItem('loginInfo');
                user = JSON.parse(a);
            }
            console.log(user);
            return user;
        }
    },
    mutations: {
        saveToken(state, payload) { //保存token
            state.token = payload;
            document.cookie = "token=" + payload;
            sessionStorage.setItem('token', payload);
        },
        saveLoginInfo(state, payload) {
            state.loginInfo = payload;
            let logoinfo = JSON.stringify(payload)
            document.cookie += logoinfo;
            sessionStorage.setItem('loginInfo', logoinfo);
        },
        loginOut(state) {
            document.cookie = 'token=';
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('logininfo');
            state.token = null;
            state.loginInfo = null;
        }
    },
    actions: {
        getLoginInfo(context, payload) {
            axios.get('/api/user', {
                headers: { 'Authori-zation': 'Bearer ' + payload }
            }).then(d => {
                context.commit('saveLoginInfo', d.data.data);
                console.log(d);
            })
        }
    },
    modules: {}
})