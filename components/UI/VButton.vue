<template>
  <button :class="size">
    <slot>Button</slot>
    <arrow v-if="arrow" style="height: 18px; transform: translateX(10px)" />
  </button>
</template>

<script>
import Arrow from '../shapes/Arrow'
export default {
  components: { Arrow },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
$gold: #f2b44f;
$dark-blue: #1b2a46;

button {
  cursor: pointer;
  font-family: 'Silka';
  font-size: 18px;
  padding: 8px 18px;
  outline: none;
  border: solid 1px $gold;
  border-radius: 999px;
  background-color: transparent;
  color: $gold;
  stroke: $gold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: $gold;
    color: $dark-blue;
    stroke: $dark-blue;
    transform: translateX(3px);
  }
}
</style>
