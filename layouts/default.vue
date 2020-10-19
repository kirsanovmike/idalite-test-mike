<template>
  <div>
    <TopNav />
    <div class="layout__main">
      <Catalog />
      <nuxt />
      <Basket />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  font-family: PT Sans;
  font-style: normal;
}
.layout__main {
  max-width: 1264px;
  margin: 32px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
}
</style>
