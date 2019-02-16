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
  @apply inline-flex items-center py-3 px-5 bg-blurple rounded shadow-md font-mono text-white font-semibold no-underline;
  transition: box-shadow 300ms ease-in-out;
}

.button:hover {
  @apply shadow;
}

.button:active {
  @apply shadow-none;
}
</style>
