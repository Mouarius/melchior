<template>
  <a href="#information">
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 36L37 53L56 36" stroke="#F2B44F" stroke-width="2" />
      <circle cx="37" cy="37" r="36" stroke="#F2B44F" stroke-width="2" />
      <line
        x1="37"
        y1="53"
        x2="37"
        y2="19"
        stroke="#F2B44F"
        stroke-width="2"
      /></svg
  ></a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease;
}
a:hover {
  transform: translateY(6px);
  path,
  line {
    transform: translateY(4px);
  }
}
</style>
