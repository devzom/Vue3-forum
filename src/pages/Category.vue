<template>
  <h1>{{ category.name }}</h1>
  <forum-list :forums="forumForCategory(category)" :title="category.name" />
</template>

<script>
import jsonData from '@/assets/dummyData.json';
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
      return jsonData.categories.find((category) => category.id === this.id);
    },
    forumForCategory() {
      return (category) => jsonData.forums.filter((forum) => forum.categoryId === category.id);
    }
  }
};
</script>

<style scoped></style>
