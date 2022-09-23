<template>
  <div class="product-modal">
    <product-card
      v-if="product !== null"
      :product="product"
      card-size="large"
    />
    <button class="close-button" @click="closeModal">close</button>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductModal',
  components: { ProductCard },
  props: ['product', 'closeModal'],
}
</script>

<style lang="scss">
$dark-blue: #1b2a46;
.close-button {
  position: absolute;
  top: 0;
}
.product-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba($color: $dark-blue, $alpha: 0.7);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
