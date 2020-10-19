<template>
<div class="flex__select__wrapper">
    <VSelect 
      class="v__select"
      :options="options"
      :selected="selectedOption"
      @currentOption="currentOption"
    />
    <div class="products__items">
      <ul class="products__list">
        <ProductItem
          class="products__item"
          v-for="product in filteredProductList"
          :key="product.id"
          :product="product"
        />
      </ul>
    </div>
</div>
</template>

<script>
export default {
  name: "ProductList",
  data: () => ({
    productList: [],
    selectedOption: "рейтингу",
    options: ["возрастанию цены", "убыванию цены", "рейтингу"],
  }),
  computed: {
    filteredProductList() {
      switch (this.selectedOption) {
        case "возрастанию цены":
          return this.productList.sort((a, b) => a.price - b.price);
        case "убыванию цены":
          return this.productList.sort((a, b) => b.price - a.price);
        case "рейтингу":
          return this.productList.sort((a, b) => b.rating - a.rating);
      }
    },
  },
  methods: {
    currentOption(option) {
      this.selectedOption = option;
    }
  },
  created() {
    this.$axios
      .get("/product", { params: { category: this.$route.params.category } })
      .then((resp) => {
        this.productList = resp.data;
      })
      .catch((err) => {
        aleert("Ошибка: ", err)
      });
  },
};
</script>

<style scoped>
.v__select {
   display: flex;
  justify-content: flex-end;
  margin-right: 52px;
}
.products__items {
  margin-top: 34px;
}
.products__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.products__item {
  margin-left: 16px;
  width: 247px;
  height: 255px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>