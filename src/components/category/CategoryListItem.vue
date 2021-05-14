<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: { id: category['.key'] } }">
        {{ category.name }}
      </router-link>
    </h2>
    <ForumList :forums="categoryForums" />
  </div>
</template>

<script>
export default {
  name: 'CategoryListItem'
};
</script>

<style></style>
