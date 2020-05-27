<template>
  <div class="hero is-fullheight is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column" id="hero-text-container">
            <h2 class="subtitle is-3" id="coming-soon-text">[coming soon]</h2>
            <h1 class="title is-1" id="hero-text">
              A package registry for
              <span id="deno-text">Deno</span>,
              <br />on the
              <span class="gradient-text">blockchain</span>
            </h1>
          </div>
          <div class="column is-4 is-hidden-mobile">
            <img src="../assets/nest_light_mono.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Inconsolata");

.gradient-text {
  background: -webkit-linear-gradient(45deg, #22c1c3, #fdbb2d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.columns {
  display: flex;
  align-items: center;
}
#deno-text {
  letter-spacing: -0.025em;
  font-family: "Inter", sans-serif;
  font-weight: 800;
}
#coming-soon-text {
  color: rgba(0, 0, 0, 0.7);
  font-family: "Inconsolata", monospace;
}
</style>