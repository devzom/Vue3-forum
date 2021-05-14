<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: { id: category['.key'] } }">
        {{ category.name }}
      </router-link>
    </h2>
    <forum-list :forums="forumForCategory(category)" :title="category.name" />
  </div>
</template>

<script>
export default {
  name: 'CategoryListItem',
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

<style></style>
