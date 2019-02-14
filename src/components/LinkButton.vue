<template>
  <a class="button" :href="link">
    <slot/>
  </a>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    link: {
      String,
      required: true
    }
  }
};
</script>

<style>
.button {
  @apply inline-flex items-center py-4 px-6 bg-blurple rounded-lg text-white font-semibold no-underline;
}
</style>
