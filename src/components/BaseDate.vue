<template>
  <span>{{ $filters.dateRelative(timestamp) }}</span>
</template>

<script>
export default {
  name: 'BaseDate',
  props: {
    timestamp: {
      type: Number,
      default: null,
      required: true
    }
  }
};
</script>

<style></style>
