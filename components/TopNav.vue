<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__wrapper">
        <div class="header__logo">TestList</div>
        <nav class="header__basket__label">
          <img
            class="basket__label"
            src="../style/img/svg/vector.svg"
            alt="basket__label"
            @click="openBasket"
            title="Корзина"
          />
          <div class="grey__circle">
            <img src="../style/img/svg/elipse-grey.svg" alt="grey-circle" />
            <div class="count__in__basket">
              {{ $store.state.basket.basket.length }}
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openBasket() {
      this.$store.commit("basket/showChange");
    },
  },
  created() {
    this.$router.push("/products/1");
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 1264px;
  margin: 0 auto;
}
.header {
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
}
.header__wrapper {
  height: 66px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  color: #59606d;
  margin-left: 5px;
}
.basket__label {
  cursor: pointer;
  margin-top:20px;
  margin-right:45px
}
.count__in__basket {
  font-weight: bold;
  font-size: 8px;
  line-height: 10px;
  color: #ffffff;
  z-index: 1;
  width: 12px;
  height: 12px;
  z-index: 1;
  position: relative;
  top:-12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grey__circle {
  position: relative;
  left:19px;
  top:-34px;
}
</style>