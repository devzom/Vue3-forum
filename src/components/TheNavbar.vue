<template>
  <header id="header" class="header">
    <a href="index.html" class="logo">Vue Forum</a>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>
        <li v-if="isAuthenticated" class="navbar-user">
          <a href="#">
            <img
              class="avatar-small"
              :src="loggedUser.avatar"
              :alt="`${loggedUser.name} profile picture`"
            />
            <span>
              {{ loggedUser.name }}
              <img class="icon-profile" src="../assets/img/svg/arrow-profile.svg" alt="" />
            </span>
          </a>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="#">View profile</a></li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
        <li v-else>
          <a href="#">
            <span> Login </span>
          </a>
        </li>
      </ul>

      <ul>
        <li class="navbar-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <!--        <li class="navbar-item">-->
        <!--          <router-link :to="{ name: 'Category' }">Category</router-link>-->
        <!--        </li>-->
        <!--        <li class="navbar-item">-->
        <!--          <router-link :to="{ name: 'Forum' }">Forum</router-link>-->
        <!--        </li>-->
        <!--        <li class="navbar-item">-->
        <!--          <router-link :to="{ name: 'Thread' }">Thread</router-link>-->
        <!--        </li>-->
        <!-- Show these option only on mobile-->
        <li v-if="isAuthenticated" class="navbar-item mobile-only">
          <a href="#">My Profile</a>
        </li>
        <li v-if="isAuthenticated" class="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavbar',
  computed: {
    ...mapGetters(['loggedUser', 'isAuthenticated'])
  }
};
</script>

<style></style>
