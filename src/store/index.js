import { createStore } from 'vuex';

import sourceData from '@/assets/dummyData.json';

export default createStore({
  state: {
    sourceData
  },
  getters: {
    forumData: (state) => state.sourceData
  },
  actions: {
    createPost(context, payload) {
      const postId = `test${Math.floor(Math.random() * (10 + 9999)) - 10}`;

      context.commit('SET_POST', payload);
      context.commit('ADD_POST_THREAD', { postId, threadId: payload.threadId });
    }
  },
  mutations: {
    SET_POST(state, post) {
      state.sourceData.posts.push(post);
    },
    ADD_POST_THREAD(state, { postId, threadId }) {
      const thread = state.sourceData.threads.find((_thread) => _thread.id === threadId);
      thread.posts.push(postId);
    }
  }
});
