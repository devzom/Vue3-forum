<template>
  <div class="col-full push-top text-center">
    <h1>Vue forum</h1>
  </div>
  <category-list :categories="categories" />
</template>

<script>
import data from '@/assets/dummyData.json';
import CategoryList from '@/components/category/CategoryList';

export default {
  name: 'Home',
  components: { CategoryList },
  data() {
    return {
      categories: data.categories
    };
  }
};
</script>
