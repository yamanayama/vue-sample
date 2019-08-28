import styles from './Button.css';

<template>
  <button class="button" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "my-button",

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
