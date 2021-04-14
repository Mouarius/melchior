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
    <div class="products-cards"></div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
export default {
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
    }
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
      const movePercentage = `${id * 100}%`
      gsap.to('#selector', { x: movePercentage })
    },
  },
}
</script>

<style lang="scss" scoped>
$gold: #f2b44f;
$dark-blue: #1b2a46;
.products-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
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
  li {
    text-align: center;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
}
</style>
