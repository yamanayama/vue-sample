<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button",

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="postcss" scoped>
.btn {
  border: 1px solid var(--radius);
  font-size: 100%;
  padding: 0.75em 3em;
  text-decoration: none;
}

.btn:hover {
  opacity: var(--opacity);
}

.btn:disabled {
  opacity: 0.2;
}
</style>