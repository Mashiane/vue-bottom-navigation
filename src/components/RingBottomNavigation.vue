<template>
  <div class="btn-container-foreground" :style="cssVariables">
    <div
      v-for="(button, index) in localOptions"
      :key="`ring-btn-${index}`"
      :class="{
        ['item']: true,
        ['selected']: button.selected,
        ['btn-center']: isCenterBtn(index),
      }"
      @click="handleButtonClick(index)"
    >
      <div
        v-if="!isCenterBtn(index)"
        :class="{ ['btn-border-top']: button.selected }"
      ></div>
      <!-- <i :class="`${button.icon}`" /> -->
      <inline-svg width="24" height="24" :src="`${button.icon}`" />

      <div v-if="button.badge > 0" class="btn-badge"></div>
    </div>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    iconColor: {
      type: String,
      default: "#bc4a61",
    },
    borderColor: {
      type: String,
      default: "#bb2736",
    },
  },
  data: () => ({
    prevSelected: null,
    currSelected: null,
    localOptions: [],
  }),
  created() {
    this.localOptions = this.options;
    console.log(this.localOptions);
  },
  computed: {
    cssVariables() {
      const styles = {
        "--border-color": this.borderColor,
        "--icon-color": this.iconColor,
      };

      return styles;
    },
  },
  methods: {
    handleButtonClick(index) {
      this.currSelected = index;

      if (this.prevSelected !== null) {
        this.localOptions[this.prevSelected].selected = false;
      }

      this.$set(this.localOptions, index, {
        ...this.localOptions[index],
        selected: true,
      });
      this.prevSelected = this.currSelected;
    },
    isCenterBtn(index) {
      const isOptionsOdd = this.localOptions.length % 2 === 1;
      return isOptionsOdd && (this.localOptions.length - 1) / 2 === index;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.btn-container-foreground {
  position: fixed;
  display: flex;
  align-items: flex-end;
  direction: ltr;
  bottom: 0;
  width: 100%;
  z-index: 2147483647;
  height: 64px;
  background: #fff;
  box-shadow: 0 0 5px 0 #eee;
}

.item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  /* cursor: pointer; */
  font-size: 20px;
  color: #6d7d83;
}

.selected i {
  color: var(--icon-color);
  animation: ring-button-selected 0.2s ease-out forwards;
}

.btn-border-top {
  position: absolute;
  top: 0;
  height: 2px;
  background-color: var(--border-color);
  animation: ring-border-top 0.2s ease-in-out forwards;
}

.btn-badge {
  position: absolute;
  top: 15px;
  right: 20px;
  background: var(--icon-color);
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.btn-center {
  background: #b52535;
  color: #fff;
  height: 90px;
  width: 90px;
  border-radius: 400px;
  flex-grow: unset;
  position: relative;
  top: 15px;
}

#el1 {
  fill: var(--border-color);
}
#el2 {
  fill: var(--icon-color);
}

@keyframes ring-border-top {
  0% {
    width: 5px;
  }
  100% {
    width: 90%;
  }
}

@keyframes ring-button-selected {
  0% {
    transform: scale(0.9);
  }
  20% {
    transform: scale(0.6);
  }
  /* 90% {
    transform: scale(1.2);
  } */
  100% {
    transform: scale(1.2);
  }
}
</style>
