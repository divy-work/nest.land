<template>
  <div id="app">
    <hero></hero>
    <nest-footer></nest-footer>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import NestFooter from "./components/Footer";

export default {
  name: 'App',
  components: {
    Hero,
    NestFooter
  }
}
</script>

<style>

</style>
