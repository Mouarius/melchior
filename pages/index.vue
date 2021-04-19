<template>
  <div class="container">
    <div class="central-container">
      <v-header></v-header>
      <section id="information" class="information">
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
      <products-list :set-modal-value="setModalValue" />
    </div>
    <product-modal
      v-if="isModalVisible"
      :product="modalValue"
      :close-modal="closeModal"
    />
  </div>
</template>

<script>
import ProductModal from '~/components/ProductModal.vue'
import ProductsList from '~/components/ProductsList.vue'
import VButton from '~/components/UI/VButton.vue'
import VHeader from '~/components/VHeader.vue'
export default {
  components: { VButton, VHeader, ProductsList, ProductModal },
  data() {
    return {
      isModalVisible: false,
      modalValue: null,
    }
  },
  methods: {
    setModalValue(product) {
      console.log('Set modal value :', product)
      this.modalValue = product
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
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
section {
  background: white;
}
@media screen and (min-width: 768px) {
  section {
    margin-top: 40px;
  }
  .container {
    grid-template-columns: $padding-space 1fr $padding-space;
    grid-template-rows: $padding-space auto;
  }
}
</style>
