<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato");

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  @apply m-0 p-6 min-h-screen flex flex-col justify-center bg-fed-blue text-white font-sans leading-normal;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%2300679e' width='11' height='11'/%3E%3Crect fill='%2302679f' x='10' width='11' height='11'/%3E%3Crect fill='%2304679f' y='10' width='11' height='11'/%3E%3Crect fill='%230768a0' x='20' width='11' height='11'/%3E%3Crect fill='%230968a1' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%230c68a1' y='20' width='11' height='11'/%3E%3Crect fill='%230e68a2' x='30' width='11' height='11'/%3E%3Crect fill='%231068a3' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%231269a3' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%231469a4' y='30' width='11' height='11'/%3E%3Crect fill='%231669a5' x='40' width='11' height='11'/%3E%3Crect fill='%231769a5' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%231969a6' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%231b6aa7' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%231c6aa7' y='40' width='11' height='11'/%3E%3Crect fill='%231e6aa8' x='50' width='11' height='11'/%3E%3Crect fill='%231f6aa9' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23216aa9' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23226baa' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23246bab' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23256bab' y='50' width='11' height='11'/%3E%3Crect fill='%23276bac' x='60' width='11' height='11'/%3E%3Crect fill='%23286bad' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%232a6bad' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%232b6cae' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%232c6cae' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%232e6caf' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%232f6cb0' x='70' width='11' height='11'/%3E%3Crect fill='%23306cb0' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23326cb1' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23336db1' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23356db2' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23366db3' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23376db3' x='80' width='11' height='11'/%3E%3Crect fill='%23386db4' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%233a6db4' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%233b6db5' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%233c6eb6' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%233e6eb6' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%233f6eb7' x='90' width='11' height='11'/%3E%3Crect fill='%23406eb7' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23426eb8' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23436eb8' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23446eb9' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23466eb9' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23476fba' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23486fbb' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23496fbb' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%234b6fbc' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%234c6fbc' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%234d6fbd' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%234f6fbd' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23506fbe' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23516fbe' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%235370bf' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%235470bf' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%235570c0' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%235670c0' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%235870c1' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%235970c1' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

@screen sm {
  body {
    @apply p-12;
  }
}

.layout {
  @apply max-w-md;
}
</style>
