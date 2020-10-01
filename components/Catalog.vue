<template>
  <div class="wrapper">
    <div class="nav__catalog">
      <div class="nav__item">Каталог</div>
      <ul class="catalog__list">
        <li
          class="catalog__item"
          v-for="item in productCategory"
          :key="item.id"
        >
          <nuxt-link
            active-class="active"
            class="nav-link catalog__link"
            :to="`/products/${item.id}`"
            >{{ item.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    productCategory: [],
  }),
  created() {
    this.$axios
      .get("product-category")
      .then((resp) => {
        this.productCategory = resp.data;
      })
      .catch((err) => {
        aleert("Ошибка: ", err)
      });
  },
  computed: {},
};
</script>

<style scoped>
.nav__catalog {
  max-width: 160px;
  position: relative;
}
.nav__item {
  font-weight: 700;
  font-size: 32px;
  line-height: 41px;
  margin-left: 5px;
}
.catalog__list {
  margin-top: 24px;
  margin-left: 4px;
  padding-left: 0;
}
.catalog__item {
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 21px;
}
.catalog__link {
  color: #959dad;
  text-decoration: none;
}
.catalog__link:hover {
  color: #59606d;
}
.catalog__link:active {
  text-decoration-line: underline;
  color: #1f1f1f;
}
.active {
  color: black;
  text-decoration-line: underline;
}
</style>