<template>
  <section class="products-list">
    <nav>
      <ul
        :style="{
          gridTemplateColumns: `repeat(${categories.length}, 1fr)`,
        }"
      >
        <li v-for="category in categories" :key="category.id">
          <a :id="'category-' + category.id" href="#" @click="moveSelector">{{
            category.name
          }}</a>
        </li>
      </ul>
      <div id="selector" :style="{ width: selectorWidth }"></div>
    </nav>
    <div class="products-cards">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        card-size="medium"
        :set-modal-value="setModalValue"
      />
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import ProductCard from './ProductCard'
export default {
  name: 'ProductsList',
  components: { ProductCard },
  props: ['setModalValue'],
  data() {
    return {
      categories: [
        {
          id: '0',
          name: 'CASSE-CROÛTE',
        },
        {
          id: '1',
          name: 'PAIN/VIENNOISERIES',
        },
        {
          id: '2',
          name: 'DESSERT/PÂTISSERIES',
        },
      ],
      products: [],
      isModalVisible: false,
      modalProduct: null,
    }
  },
  async fetch() {
    this.products = await this.$content('products').fetch()
  },
  computed: {
    selectorWidth() {
      const width = 100 / this.categories.length
      return `${width}%`
    },
  },
  methods: {
    moveSelector(e) {
      e.preventDefault()
      const id = Number(e.target.id.slice(9))
      const movePercentage = id * 100
      const tl = gsap.timeline({ duration: '1s' })
      tl.to('#selector', {
        x: movePercentage + '%',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$gold: #f2b44f;
$dark-blue: #1b2a46;
$grey-blue: #e7e9f3;

#selector {
  height: 5px;
  background: $gold;
}
a {
  text-decoration: none;
  color: inherit;
}

ul {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 50px;
  font-size: 13px;

  li {
    text-align: center;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
}
.products-cards {
  display: grid;
  padding: 0px;
  padding-top: 15px;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
@media screen and (min-width: 615px) {
  .products-cards {
    padding: 15px;
  }

  ul {
    font-size: 16px;
  }
  .products-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
