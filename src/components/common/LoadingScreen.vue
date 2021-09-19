<template>
  <div class="loading-screen-container">
    <section>
      <div class="loader loader-1">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
      <div class="loading-text"><span>Yükleniyor...</span></div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
body {
  background: black;
}

.loading-screen-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 999999;
}

section {
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
  vertical-align: top;
  background: #080915;
  -webkit-box-shadow: 0px 0px 30px 1px #103136 inset;
  box-shadow: 0px 0px 30px 1px #103136 inset;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {
  section {
    min-width: 350px;
  }
}

.loader {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}

.loader-star {
  position: absolute;
  top: calc(50% - 12px);
}
/*LOADER-1*/

.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #f50057;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #f50057;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}
.loading-text {
  margin-top: 20px;
  color: #fff;
}

/* ----------------     KEYFRAMES    ----------------- */

@-webkit-keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
