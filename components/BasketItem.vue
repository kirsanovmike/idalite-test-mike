<template>
  <div>
    <div class="card__body">
      <img
        :src="`http://front-test.idalite.com${product.photo}`"
        class="card__photo"
      />
      <div class="product__info">
        <p class="product__name">{{ product.name }}</p>
        <div class="product__price">
          {{ productPriceToNormal(product.price) }}
        </div>
        <div class="rating">
          <img
            class="star__rating"
            src="../style/img/svg/star-rating.svg"
            alt="rating__product"
          />
          <p class="product__raiting">
            {{ product.rating }}
          </p>
        </div>
      </div>
      <img
        class="delete__basket"
        src="../style/img/svg/basket.svg"
        alt="basket__label"
        @click="deleteProduct(product)"
        title="Удалить"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteProduct(product) {
      this.$store.commit("basket/delete", product);
    },
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
  },
};
</script>

<style scoped>
.card__body {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
}
.card__photo {
  height: 100px;
  width: 94px;
  margin-left: 25px;
  margin-top: 10px;
}
.product__info {
  margin-left: 34px;
  margin-top: 12px;
}
.product__name {
  max-width: 170px;
  font-size: 14px;
  line-height: 18px;
  color: #59606d;
  margin-bottom: 6px;
}
.product__price {
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #1f1f1f;
}
.rating {
  display: flex;
  margin-top: 19px;
}
.product__raiting {
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  color: #f2c94c;
  margin-left: 3.5px;
}
.delete__basket {
  margin-left: 322px;
  margin-top: 49px;
  position: absolute;
  cursor: pointer;
}
</style>