<template>
  <button :class="`btn-${size}`" @click="clickHandler">
    <slot>Button</slot>
    <arrow v-if="arrow" style="height: 18px; transform: translateX(10px)" />
  </button>
</template>

<script>
import Arrow from '../shapes/Arrow'
export default {
  name: 'VButton',
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
    clickHandler: {
      type: Function,
      default: () => {},
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
.btn-small {
  height: 24px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
}
.btn-medium {
  height: 40px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 18px;
}
</style>
