<template>
  <header class="page-header">
    <div class="page-title">
      <h1>melchior</h1>
      <h2>boulangerie fictive</h2>
    </div>
    <down-button class="down-button" />
  </header>
</template>

<script>
import DownButton from './UI/DownButton'
export default {
  components: { DownButton },
}
</script>

<style lang="scss">
$padding-space: 80px;

header.page-header {
  height: 100vh;
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
    font-size: 64px;

    text-transform: uppercase;
    border-bottom: solid 3px white;
    line-height: 70px;
  }
  h2 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 32px;
  }
  text-align: center;
  display: block;
  color: white;
}

@media screen and (min-width: 600px) {
  .page-title {
    h1 {
      font-size: 90px;
      line-height: 90px;
    }
    h2 {
      margin-top: 10px;
      font-size: 40px;
    }
  }
}
@media screen and (min-width: 768px) {
  header.page-header {
    height: calc(100vh - #{$padding-space});
  }
}
</style>
