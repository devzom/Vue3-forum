<template>
  <div class="col-full push-top text-center">
    <h1>Vue forum</h1>
  </div>
  <forum-list :forums="forums" />
</template>

<script>
import data from '@/assets/dummyData.json';
import ForumList from '@/components/ForumList';

export default {
  name: 'Home',
  components: { ForumList },
  data() {
    return {
      forums: data.forums
    };
  }
};
</script>
