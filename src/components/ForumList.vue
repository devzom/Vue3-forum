<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="#">{{ title }}</a>
      </h2>

      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="text-xlarge">
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadsWord(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      required: true,
      type: Array
    },
    title: {
      type: String,
      default: 'Forum',
      required: true
    },
    categoryId: {
      type: String,
      default: ''
      // required: true
    }
  },
  methods: {
    forumThreadsWord(forum) {
      if (forum.threads?.length) {
        return `thread${forum.threads.length ? 's' : ''}`;
      }
      return 'no threads';
    }
  }
};
</script>

<style></style>
