<template>
  <section class="card-wrap">
    <div class="card" style="width: 18rem;">
      <slot name="card-img">
        <img
          class="card-img-top"
          src="../../assets/img/icon/motorcycle.svg"
          alt="Card image cap"
        />
      </slot>
      <div class="card-body">
        <p class="card-text text-center" style="font-weight:500;">
          <slot name="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  transition: box-shadow 0.5s;
  cursor: pointer;
  padding: none;
}
.card:hover {
  transition: box-shadow 0.5s;
  box-shadow: 0 0 10px 0 #000;
}
img {
  border: 2px solid #000;
  padding: 1rem;
}
.card-body {
  border: 2px solid #000;
  border-top: none;
}
</style>
