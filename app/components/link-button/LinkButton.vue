<template>
  <a class="inline-flex items-center py-3 px-5 bg-blurple rounded-xl shadow-md font-mono text-white font-semibold no-underline transition-shadow hover:shadow-lg active:shadow-none"
    :href="link">
    <slot />
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
