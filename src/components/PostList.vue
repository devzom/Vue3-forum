<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user-info">
        <a href="profile.html#profile-details" class="user-name">
          {{ userById(post.userId).name }}</a
        >
        <a href="profile.html#profile-details">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="" />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/dummyData.json';

export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      users: data.users
    };
  },
  methods: {
    userById(id) {
      return this.users.find((user) => user.id === id);
    }
  }
};
</script>

<style></style>
