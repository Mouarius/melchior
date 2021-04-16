<template>
  <div class="product">
    <img
      class="product-image"
      :src="require('../assets/images/products/' + product.image)"
      :alt="product.id"
    />

    <div class="product-description">
      <header>
        <h1>{{ product.title }}</h1>
        <h2>{{ product.subtitle }}</h2>
      </header>
      <div class="sizes">
        <ul>
          <li v-for="size in product.sizes" :key="size.quantity">
            <input
              v-if="isModalShown"
              :id="product.id + '_' + product.quantity"
              type="radio"
              name="size"
            />
            <strong>{{ formatPrice(size.price) }}</strong>
            <em>{{ formatQuantity(size.quantity) }}</em>
          </li>
        </ul>
      </div>
      <footer>
        <v-button size="small" :click-handler="showModal">COMMANDER</v-button>
      </footer>
    </div>
  </div>
</template>

<script>
import VButton from './UI/VButton'
export default {
  name: 'ProductCard',
  components: {
    VButton,
  },
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          title: '',
          subtitle: '',
          image: '',
          sizes: [],
          id: null,
        }
      },
    },
  },
  data() {
    return {
      isModalShown: false,
    }
  },
  methods: {
    formatPrice(number) {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      }).format(number)
    },
    formatQuantity(quantity) {
      if (quantity === 1) {
        return '(Part individuelle)'
      } else {
        return `(${quantity} personnes)`
      }
    },
    showModal() {
      console.log('Showing modal')
      this.isModalShown = true
    },
  },
}
</script>

<style lang="scss" scoped>
$gold: #f2b44f;
$dark-blue: #1b2a46;
$grey-blue: #e7e9f3;

.product {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
.product-image {
  height: 160px;
  width: 100%;
  object-fit: cover;
}
.product-description {
  background: $dark-blue;
  color: white;
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  h1 {
    font-size: 18px;
    font-weight: 600;
  }
  h2 {
    font-size: 12px;
    font-weight: 500;
    color: $grey-blue;
  }
}
footer {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
}
.price {
  font-size: 26px;
  font-weight: 600;
  margin-right: 8px;
}
ul {
  list-style: none;
  padding: 0;
  font-size: 12px;
  padding-left: 10px;
  li {
    margin: 0;
    margin-bottom: 2px;
  }
}
input[type='radio'] {
  height: 12px;
  outline: none;
  border: none;
}
em {
  font-style: normal;
  color: $grey-blue;
}
strong {
  font-size: 14px;
  font-weight: 500;
}
.modal-version {
  .product-description {
    background: white;
  }
}
</style>
