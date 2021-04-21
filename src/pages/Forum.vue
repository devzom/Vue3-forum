<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>Cooking</h1>
        <p class="text-lead">Discuss your passion for food and cooking</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <thread-list :threads="threads" />
  </div>
</template>

<script>
import jsonData from '@/assets/dummyData.json';
import ThreadList from '@/pages/PageThreadList';

export default {
  name: 'Forum',
  components: { ThreadList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    forum() {
      return jsonData.forums.find((forum) => forum.id === this.id);
    },
    threads() {
      return jsonData.threads.filter((thread) => thread.forumId === this.id);
    }
  }
};
</script>

<style scoped></style>
