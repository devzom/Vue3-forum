<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'Thread', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="profile.html"> {{ userById(thread.userId).name }}</a
            >,
            <base-date :timestamp="thread.publishedAt" />
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} {{ thread.posts.length > 1 ? 'replies' : 'reply' }}
          </p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <base-date :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDate from '@/components/BaseDate';

export default {
  name: 'ThreadList',
  components: { BaseDate },
  props: {
    threads: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.sourceData.users;
    },
    posts() {
      return this.$store.state.sourceData.posts;
    }
  },
  methods: {
    postById(id) {
      return this.posts.find((post) => post.id === id);
    },
    userById(id) {
      return this.users.find((user) => user.id === id);
    }
  }
};
</script>

<style></style>
