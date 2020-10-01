<template>
  <div class="product__container">
    <div class="top__of__card">
      <div class="rating">
        <img
          class="star__rating"
          src="../style/img/svg/star-rating.svg"
          alt="rating__product"
        />
        <p class="product__raiting"></p>
        {{ product.rating }}
      </div>
      <img
        class="product__photo"
        :src="`http://front-test.idalite.com${product.photo}`"
        alt="product__photo"
      />
      <img
        class="basket__label"
        src="../style/img/svg/VectorSmall.svg"
        alt="VectorSmall"
        @click="pushInBasket(product)"
        title="Добавить в корзину"
      />
    </div>
    <div class="product__name">{{ product.name }}</div>
    <div class="product__price">{{ productPriceToNormal(product.price) }}</div>
    <div v-if="isInBasket" :class="{ in__basket: isInBasket }">В корзине</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  computed: {
    isInBasket() {
      if (this.$store.state.basket.basket.map((el) => el.id).indexOf(this.product.id) == -1)
        return false;
      return true;
    },
  },
  methods: {
    //from 199234345
    //to 199 234 345₽
    productPriceToNormal(price) {
      if (price < 1000) return price + "₽";

      let priceStr = "₽ ";
      let currentPrice = price;

      while (currentPrice > 0) {
        if (currentPrice % 1000 == 0) {
          priceStr += "000" + " ";
        } else {
          priceStr += (currentPrice % 1000) + " ";
        }
        currentPrice = Math.floor(currentPrice / 1000);
      }

      return priceStr.split(" ").reverse().join(" ");
    },
    pushInBasket(product) {
      this.$store.commit("basket/add", product);
    },
  },
};
</script>

<style scoped>
.top__of__card {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 14px;
}
.rating {
  display: flex;
  flex-direction: row;
  font-size: 10px;
  font-weight: bold;
  line-height: 13px;
  color: #f2c94c;
}
.product__raiting {
  margin-left: 3.5px;
}
.basket__label {
  cursor: pointer;
}
.product__photo {
  height: 180px;
  width: 167px;
}
.product__name {
  font-size: 14px;
  line-height: 18px;
  color: #59606d;
  padding-left: 16px;
  padding-bottom: 6px;
}
.product__price {
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #1f1f1f;
  padding-left: 16px;
}
.in__basket {
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  position: relative;
  left: 188px;
  top: -207px;
  width: 60px;
  color: #f8d25f;
}
</style>