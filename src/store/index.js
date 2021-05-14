import { createStore } from 'vuex';

import sourceData from '@/assets/dummyData.json';

export default createStore({
  state: {
    sourceData,
    auth: {
      id: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
      isLogged: true
    }
  },
  getters: {
    forumData: (state) => state.sourceData,
    // *auth related
    loggedUser: (state) => {
      const user = state.sourceData.users.find((_user) => _user.id === state.auth.id);

      if (!user) return null;

      return {
        ...user,
        get posts() {
          return state.sourceData.posts.filter((post) => post.userId === user.id);
        },

        get postsCount() {
          return this.posts.length;
        },

        get threads() {
          return state.sourceData.threads.filter((post) => post.userId === user.id);
        },

        get threadsCount() {
          return this.threads.length;
        }
      };
    },
    isAuthenticated: (state) => state.auth.isLogged
  },
  actions: {
    createPost({ commit }, payload) {
      const postId = `test${Math.floor(Math.random() * (10 + 9999)) - 10}`;

      commit('SET_POST', payload);
      commit('ADD_POST_THREAD', { postId, threadId: payload.threadId });
    },
    updateUser({ commit }, payload) {
      commit('SET_USER', payload);
    }
  },
  mutations: {
    SET_POST(state, post) {
      state.sourceData.posts.push({ ...post, userId: state.auth.id });
    },
    ADD_POST_THREAD(state, { postId, threadId }) {
      const thread = state.sourceData.threads.find((_thread) => _thread.id === threadId);
      thread.posts.push(postId);
    },
    SET_USER(state, user) {
      const userIndex = state.sourceData.users.findIndex((_user) => _user.id === user.id);

      state.sourceData.users[userIndex] = user;
    }
  }
});
