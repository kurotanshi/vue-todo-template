import { createStore } from 'vuex'
import apis from './apis';

export default createStore({
  state() {
    return {
      userInfo: {
        isLogin: false,
        nickname: '',
        email: '',
      },
      errorMessage: '',
      todoList: []
    }
  },
  getters: {

  },
  actions: {
    userLogin: async (context, payload) => {
      // 登入
      try {
        const { email, nickname } = await apis.userLogin({
          email: payload?.email,
          password: payload?.password,
        });

        // 觸發 mutations      
        context.commit('updateUserInfo', {
          isLogin: true,
          nickname: nickname,
          email: email,
        });
      }
      catch (err) {
        // console.log(err.response.data)
        context.commit('updateErrorMessage', err.response.data.message);
        window.setTimeout(() => {
          context.commit('updateErrorMessage', '');
        }, 5000);
      }
    },
    userReg: async (context, payload) => {
      try {
        // 註冊
        const { email, nickname } = await apis.userReg({
          nickname: payload?.nickname,
          email: payload?.email,
          password: payload?.password,
        });

        // 觸發 mutations
        context.commit('updateUserInfo', {
          isLogin: true,
          nickname: nickname,
          email: email,
        });
      }
      catch (err) {
        context.commit('updateErrorMessage', err.response.data.message);
        window.setTimeout(() => {
          context.commit('updateErrorMessage', '');
        }, 5000);
      }
    },
    logout: async (context) => {
      // 登出
      const res = await apis.userLogout()
      window.localStorage.removeItem('token');

      // 更新會員狀態
      context.commit('updateUserInfo', {
        isLogin: false,
        nickname: '',
        email: '',
      });
    },
    getList: async (context) => {
      const { todos } = await apis.getList()
      context.commit('updateLists', todos.map(d => ({ ...d, isEdit: false })));
    },
    addItem: async (context, payload) => {
      const res = await apis.addItem(payload);
      await context.dispatch('getList');
    },
    editItem: async (context, payload) => {
      const { id, content } = payload;
      const res = await apis.editItem({ id, content });
      await context.dispatch('getList');
    },
    removeItem: async (context, payload) => {
      const res = await apis.removeItem(payload);
      await context.dispatch('getList');
    },
    toggleItem: async (context, payload) => {
      const res = await apis.toggleItem(payload);
      await context.dispatch('getList');
    },
  },
  mutations: {
    updateUserInfo: (state, payload) => {
      state.userInfo = payload;
    },
    updateUserEmail: (state, payload) => {
      state.userInfo.email = payload;
    },
    updateUserNickname: (state, payload) => {
      state.userInfo.nickname = payload;
    },
    updateErrorMessage: (state, payload) => {
      state.errorMessage = payload;
    },
    updateLists: (state, payload) => {
      state.todoList = payload;
    }

  }
})