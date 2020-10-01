<template>
  <div class="v__select">
    <p
      class="titile"
      @click="areOptionsVisible = !areOptionsVisible"
    >
    Сортировать по: <span class="selected">{{selected}}</span>
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="(option, index) in options"
        :key="index"
        @click="currentOption(option)"
      >
        По {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
      default: [],
    },
    selected: {
      type: String,
      required: true,
      default: "рейтингу",
    },
  },
  methods: {
    currentOption(option) {
      this.areOptionsVisible = false;
      this.$emit("currentOption", option);
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style scoped>
.v__select {
  position: relative;
}
.titile {
  cursor: pointer;

}
.titile::after {
  content: url("../style/img/svg/Strelka.svg");
  position: relative;
  left: 7px;
  bottom: 3px;
}
.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 30px;
  position: absolute;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.options p {
  padding-left: 8px;
  width: 200px;
  height: 30px;
  color: #959DAD;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}
.options p:last-child {
  margin-bottom: 0;
}
.options p:hover {
  background: #F8F8F8;
  color: #1F1F1F;
}
.selected {
  color: #59606D;
}
</style>