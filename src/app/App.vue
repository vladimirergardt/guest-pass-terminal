<template>
  <div id="app">
    <router-view name="menu"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "../assets/scss/main.scss";

  #app {
    padding: 0;
    margin: 0;
    height: 100vh;
    /*width: 768px;*/
    background-color: $bg-color;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto-Regular", sans-serif;
  }

  .gpt-home {

    &__banner {
      background-image: url("../assets/images/bg/girl_reception_2.png");
    }

    &__promotion-banner {
      background-image: url("../assets/images/bg/adv.jpg");
    }
  }

  .gpt-container {
    padding: 0 25px;
  }

  @font-face {
    font-family: 'Roboto-Regular';
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Roboto-Regular.ttf");
  }

  @font-face {
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/Roboto-Medium.ttf");
  }

  @font-face {
    font-family: 'Roboto-Bold';
    font-style: normal;
    font-weight: 600;
    src: url("../assets/fonts/Roboto-Bold.ttf");
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src:
            local('Material Icons'),
            local('MaterialIcons-Regular'),
            url('../assets/fonts/material-design-icons/MaterialIcons-Regular.woff2') format('woff2'),
            url('../assets/fonts/material-design-icons/MaterialIcons-Regular.woff') format('woff'),
            url('../assets/fonts/material-design-icons/MaterialIcons-Regular.ttf') format('truetype');
  }

</style>
