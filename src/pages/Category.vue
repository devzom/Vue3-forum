<template>
  <h1>{{ category.name }}</h1>
  <forum-list :forums="forumForCategory(category)" :title="category.name" />
</template>

<script>
import ForumList from '@/components/ForumList';

export default {
  name: 'Category',
  components: { ForumList },
  props: {
    id: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    category() {
      return this.$store.getters.forumData.categories.find((category) => category.id === this.id);
    },
    forumForCategory() {
      return (category) =>
        this.$store.getters.forumData.forums.filter((forum) => forum.categoryId === category.id);
    }
  }
};
</script>

<style scoped></style>
