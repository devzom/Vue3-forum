<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor :post-id="id" @addPost="submitPost" />
  </div>

  <div v-else class="col-full text-center center-center">
    <h1>Thread doesn't exist</h1>
    <router-link :to="{ name: 'Home' }">Read other cool threads</router-link>
  </div>
</template>

<script>
import PostList from '@/components/post/PostList';
import PostEditor from '@/components/post/PostEditor';

export default {
  name: 'PageThreadItem',
  components: { PostEditor, PostList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread() {
      return this.$store.getters.forumData.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.$store.getters.forumData.posts.filter((post) => post.threadId === this.id);
    }
  },
  methods: {
    submitPost(post) {
      this.$store.dispatch('createPost', post);
    }
  }
};
</script>

<style></style>
