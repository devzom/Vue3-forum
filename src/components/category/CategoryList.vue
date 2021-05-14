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
import jsonData from '@/assets/dummyData.json';

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
      return (category) => jsonData.forums.filter((forum) => forum.categoryId === category.id);
    }
  }
};
</script>

<style></style>
