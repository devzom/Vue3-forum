<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="forumForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import ForumList from '@/components/ForumList';

export default {
  name: 'CategoryList',
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {
    forumForCategory() {
      return (category) =>
        this.$store.getters.forumData.forums.filter((forum) => forum.categoryId === category.id);
    }
  }
};
</script>

<style></style>
