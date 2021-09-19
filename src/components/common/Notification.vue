<template>
  <section :class="['alert', type]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "alert-danger"
    }
  }
};
</script>
