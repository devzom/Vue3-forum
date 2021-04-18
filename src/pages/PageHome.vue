<template>
  <h1>Vue forum</h1>
  <page-thread-list :threads="threads" />
</template>

<script>
import data from '@/assets/dummyData.json';
import PageThreadList from '@/pages/PageThreadList';

export default {
  name: 'PageHome',
  components: { PageThreadList },
  data() {
    return {
      threads: data.threads
    };
  }
};
</script>
