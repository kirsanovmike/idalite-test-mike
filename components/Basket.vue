<template>
  <div class="basket__field" v-if="$store.state.basket.show">
    <div class="basket__wrapper">
      <div class="basket__head">
        <p class="label__basket">Корзина</p>
        <img
          class="exit__cross"
          src="../style/img/svg/krestik.svg"
          alt="krestik"
          @click="openCloseBasket"
          title="Закрыть"
        />
      </div>
      <!-- EMPTY -->
      <div v-if="!formIsSubmited">
        <div v-if="!basketAll.length">
          <p class="basket__empty">Пока что вы ничего не добавили в корзину.</p>
          <button class="btn__base" @click="openCloseBasket">
            Перейти к выбору
          </button>
        </div>
        <!-- NOT-EMPTY -->
        <div v-else class="basket__container">
          <p class="products__in__basket">Товары в корзине</p>
          <div class="basket__list" style="width: 18rem">
            <BasketItem
              class="basket__card"
              v-for="(product, index) in basketAll"
              :key="index"
              :product="product"
            />
          </div>
          <form
            name="info__form"
            id="submitForm"
            autocomplete="on"
            @submit.prevent="submitForm"
          >
            <p class="text__to__order">Оформить заказ</p>
            <input
              class="form__base"
              type="text"
              placeholder="Ваше имя"
              required
              autofocus
              v-model="name"
            />
            <input
              class="form__base"
              v-mask="'+7 (###) ###-##-##'"
              v-model="phoneNumber"
              type="text"
              id="phone"
              placeholder="Телефон"
              required
            />
            <input
              class="form__base"
              type="text"
              placeholder="Адрес"
              v-model="adress"
              required
            />
            <input
              class="id_of_ordered_products"
              :value="this.$store.state.basket.basket.map((el) => el.id)"
              style="display: none"
            />
            <input class="btn__base" type="submit" v-html="'Отправить'" />
          </form>
          <div
            class="exception"
            v-if="isExeptionInForm && phoneNumber.length != 18"
          >
            <span class="exclamation__sign" v-html="'!!'" />
            Все поля обязательные.
          </div>
        </div>
      </div>
      <!-- IS SUBMITED -->
      <div class="is__submited" v-if="formIsSubmited">
        <img src="../style/img/svg/ok.svg" alt="ok" />
        <p style="font-weight: bold; font-size: 24px; line-height: 31px">
          Заявка успешно отправлена
        </p>
        <p style="font-size: 16px; line-height: 21px; color: #59606d">
          Вскоре наш менеджер свяжется с Вами
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueMask from "v-mask";

Vue.use(VueMask);

export default {
  name: "Basket",
  data: () => ({
    name: "",
    phoneNumber: "",
    adress: "",
    isExeptionInForm: false,
    formIsSubmited: false,
  }),
  computed: {
    basketAll() {
      return this.$store.state.basket.basket;
    },
  },
  methods: {
    submitForm(e) {
      if (this.phoneNumber.length == 18) {
        console.log("form submited", e);
        this.isExeptionInForm = false;
        this.formIsSubmited = true;
        this.$store.commit("basket/deleteBasket");
      } else {
        this.isExeptionInForm = true;
      }
    },
    openCloseBasket() {
      this.$store.commit("basket/showChange");
      this.formIsSubmited = false;
    },
  },
};
</script>

<style  scoped>
.basket__field {
  background: #ffffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  width: 460px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
}
.basket__field::-webkit-scrollbar {
  width: 8px;
  background: #959dad6c;
  border-radius: 8px 8px;
}
.basket__field::-webkit-scrollbar-thumb {
  background: #59606d91;
  border-radius: 8px 8px;
}
.basket__field::-webkit-scrollbar-thumb:hover {
  background: #00000080;
}
.basket__wrapper {
  width: 364px;
  margin: 0 auto;
}
.label__basket {
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
}
.basket__empty {
  font-size: 22px;
  line-height: 28px;
  margin-top: 24px;
}
.btn__base {
  width: 100%;
  height: 50px;
  color: #ffffff;
  background: #1f1f1f;
  font-size: 16px;
  line-height: 21px;
  align-items: center;
  border-radius: 8px;
  margin-top: 24px;
  border: 0px;
  margin-bottom: 105px;
}
.btn__base:hover {
  background-color: #59606d;
}
.basket__head {
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
}
.products__in__basket {
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 23px;
  color: #59606d;
}
.basket__card {
  width: 364px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 12px;
}
.exit__cross {
  cursor: pointer;
}
.text__to__order {
  font-size: 18px;
  line-height: 23px;
  color: #59606d;
  margin-top: 32px;
  margin-bottom: 16px;
}
.form__base {
  background: #f8f8f8;
  border-radius: 8px;
  color: #1f1f1f;
  font-size: 16px;
  line-height: 21px;
  border: 0;
  margin-bottom: 16px;
  width: 100%;
  height: 50px;
  padding-left: 14px;
}
.exception {
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 105px;
}
.exclamation__sign {
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  margin-right: 8px;
  color: #eb5757;
}
.is__submited {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>