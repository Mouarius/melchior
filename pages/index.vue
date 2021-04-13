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
      <section class="information">
        <div class="contact-card card">
          <h1>MELCHIOR</h1>
          <a>+33 (0)3.12.34.56.78</a>
          <a href="mailto: boulangerie@melchior.fr">boulangerie@melchior.fr</a>
          <span class="address"
            >4 rue du grand pré <br />
            44000 NANTES</span
          >
        </div>
        <div class="command-card card">
          <strong>UNE PETITE FAIM ?</strong>
          <v-button :arrow="true">COMMANDER </v-button>
        </div>
      </section>
      <div class="product-list"></div>
    </div>
  </div>
</template>

<script>
import DownButton from '~/components/UI/DownButton.vue'
import VButton from '~/components/UI/VButton.vue'
export default {
  components: { DownButton, VButton },
}
</script>

<style lang="scss">
$padding-space: 80px;
$grey-blue: #e7e9f3;
.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0px 1fr 0px;
  grid-template-rows: 0px auto;

  grid-template-areas: 'header header header' '. main .';
  background: $grey-blue;
}
.central-container {
  width: 100%;
  height: 100%;
  grid-area: main;
}
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
.information {
  display: grid;
  grid-template-columns: 2fr 3fr;
}
.card {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.contact-card {
  background: white;
  h1 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .address {
    margin-top: 10px;
  }
  a {
    color: #8f9fc2;
    text-decoration: none;
  }
}
.command-card {
  background: #1b2a46;
  color: white;
  justify-content: space-between;
  strong {
    font-family: Chromate;
    font-size: 32px;
    font-weight: normal;
    font-style: normal;
  }
}
@media screen and (min-width: 720px) {
  .container {
    grid-template-columns: $padding-space 1fr $padding-space;
    grid-template-rows: $padding-space auto;
  }
  header.page-header {
    height: calc(100vh - #{$padding-space});
  }
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
</style>
