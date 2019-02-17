// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // DNS prefetch
  head.link.push({
    rel: "dns-prefetch",
    href: "https://fonts.googleapis.com/"
  });

  head.link.push({
    rel: "dns-prefetch",
    href: "https://fonts.googleapis.com/"
  });

  // External css
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lato|Inconsolata"
  });

  // Meta tags
  head.meta.push({
    name: "description",
    content:
      "We are a friendly creative web developer Discord community (originally on Slack) of passionate front-end developers."
  });

  // Facebook Open Graph
  head.meta.push({
    name: "og:type",
    content: "website"
  });

  head.meta.push({
    name: "og:title",
    content: "Front-end Developers"
  });

  head.meta.push({
    name: "og:description",
    content:
      "We are a friendly creative web developer Discord community (originally on Slack) of passionate front-end developers."
  });

  head.meta.push({
    name: "og:image",
    content: "/assets/img/meta/fb-og-1200x630.png"
  });

  head.meta.push({
    name: "og:image:secure_url",
    content: "/assets/img/meta/facebook-og-1200x630.png"
  });

  head.meta.push({
    name: "og:url",
    content: "https://frontenddevelopers.org/"
  });

  // Twitter summary card
  head.meta.push({
    name: "twitter:card",
    content: "summary"
  });

  head.meta.push({
    name: "twitter:title",
    content: "Front-End Developers"
  });

  head.meta.push({
    name: "twitter:description",
    content:
      "We are a friendly creative web developer Discord community (originally on Slack) of passionate front-end developers."
  });

  head.meta.push({
    name: "twitter:image",
    content: "/assets/img/meta/twitter-card-1200x675.png"
  });

  head.meta.push({
    name: "twitter:url",
    content: "https://frontenddevelopers.org/"
  });

  // Browser theme color
  head.meta.push({
    name: "theme-color",
    content: "#00679e"
  });
}
