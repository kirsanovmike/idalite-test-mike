<template>
  <div class="main-div">
    <h1>Рюкзаки</h1>
    <div class="parent">
      <div
        class="card-product"
        style="width: 18rem;"
        v-for="(product, index) in allBackpacks"
        :key="index"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem";
export default {
  computed: {
    allBackpacks() {
      return this.$store.state.sacks.sacks;
    },
  },
};
</script>

<style scoped>
.card-product {
  margin: 2%;
  border: 0.5px solid rgb(212, 206, 206);
  border-radius: 3px;
}

.card-product:hover {
  border: 1.5px solid rgba(114, 114, 114, 0.61);
}

.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>