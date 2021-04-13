<template>
  <div class="container">
    <div class="central-container">
      <header class="page-header">
        <div class="page-title">
          <h1>melchior</h1>
          <h2>boulangerie fictive</h2>
        </div>
        <down-button class="down-button" />
      </header>
    </div>
  </div>
</template>

<script>
import DownButton from '~/components/DownButton.vue'
export default {
  components: { DownButton },
}
</script>

<style lang="scss">
$padding-space: 80px;
$grey-blue: #e7e9f3;
.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: $padding-space auto $padding-space;
  grid-template-rows: $padding-space auto;
  grid-template-areas: 'header header header' '. main .';
  background: $grey-blue;
}
.central-container {
  width: 100%;
  height: 100%;
  grid-area: main;
}
header.page-header {
  height: calc(100vh - #{$padding-space});
  background: linear-gradient(
      360deg,
      rgba(27, 42, 70, 0.72) 0%,
      rgba(27, 42, 70, 0.17) 100%
    ),
    url('~/assets/images/landing-picture.jpeg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.down-button {
  position: absolute;
  bottom: calc(#{$padding-space / 2});
  height: 64px;
}

.page-title {
  h1 {
    font-family: 'Chromate', serif;
    font-weight: 300;
    font-size: 100px;
    text-transform: uppercase;
    border-bottom: solid 3px white;
    line-height: 100px;
  }
  h2 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 40px;
  }
  text-align: center;
  display: block;
  color: white;
}
</style>
