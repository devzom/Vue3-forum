<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <profile-edit v-if="edit" :user="user" />
        <profile-card v-else :user="user" />
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <post-list :posts="user.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostList from '@/components/post/PostList';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileEdit from '@/components/profile/ProfileEdit';

export default {
  name: 'Profile',
  components: { PostList, ProfileCard, ProfileEdit },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ user: 'loggedUser' })
  }
};
</script>

<style></style>
