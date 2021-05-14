<template>
  <div class="col-full">
    <div v-if="submitted" class="text-success">The post was submited correctly</div>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <textarea
          id="postEdit"
          v-model="text"
          name="postEdit"
          cols="30"
          class="form-input"
          rows="8"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostEditor',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  emits: ['addPost'],
  data() {
    return {
      text: '',
      submitted: false
    };
  },
  methods: {
    submitPost() {
      if (!this.text.length) {
        // eslint-disable-next-line no-alert
        alert('Add a content to the post editor');
        return;
      }

      const post = {
        userId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2',
        threadId: this.postId,
        publishedAt: Math.floor(Date.now() / 1000),
        text: this.text
      };

      this.$emit('addPost', post); // update/add post in parent component

      this.submitted = !this.submitted;
      this.text = ''; // clear input

      // setInterval(() => {
      //   this.submitted = !this.submitted;
      // }, 2000);
    }
  }
};
</script>

<style></style>
