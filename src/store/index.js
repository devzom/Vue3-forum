import { createStore } from 'vuex';
import sourceData from '@/assets/dummyData.json';

export default createStore({
  state: {
    sourceData
  },
  getters: {
    forumData: (state) => state.sourceData
  },
  actions: {},
  mutations: {}
});
