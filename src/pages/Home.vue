<template>
  <div class="col-full push-top text-center">
    <h1>Vue forum</h1>
  </div>
  <category-list :categories="categories" />
</template>

<script>
import CategoryList from '@/components/category/CategoryList';

export default {
  name: 'Home',
  components: { CategoryList },
  computed: {
    categories() {
      return this.$store.getters.forumData.categories;
    }
  }
};
</script>
