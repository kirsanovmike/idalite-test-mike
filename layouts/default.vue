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
import TopNav from "@/components/TopNav";
import Catalog from "@/components/Catalog";
import Basket from "@/components/Basket";
export default {
  components: {
    TopNav,
    Catalog,
    Basket,
  },
  methods: {
  },
  created() {
    // console.log(this.$router)
    // this.$router.replace("products/?id=1");
  },
};
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
