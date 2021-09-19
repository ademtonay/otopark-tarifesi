<template>
  <main class="card-container d-flex align-items-center justify-content-center">
    <section
      class="vehicle-types d-flex align-items-center justify-content-center"
      style="flex-direction:column;"
    >
      <section class="d-flex align-items-center justify-content-center">
        <app-vehicle-card
          class="card"
          v-for="(vehicle, index) in vehicles"
          :key="index"
        >
          <slot slot="card-img">
            <img :src="vehicle.img.src" :alt="vehicle.img.alt" />
          </slot>
          <slot slot="card-text">
            {{ vehicle.name }}
          </slot>
        </app-vehicle-card>
      </section>
      <section class="description-container">
        <h3>Lütfen Park Edeceğiniz Araç Türünü Seçiniz</h3>
      </section>
      <section class="button-container">
        <button class="btn btn-primary">
          Devam et
        </button>
      </section>
    </section>
  </main>
</template>

<script>
import VehicleCard from "../cards/VehicleCard";
export default {
  components: {
    appVehicleCard: VehicleCard
  },
  data() {
    return {
      vehicles: [
        {
          name: "Motorsiklet",
          img: {
            src: require("../../assets/img/icon/motorcycle.svg"),
            alt: "motorcycle_img"
          }
        },
        {
          name: "Otomobil",
          img: {
            src: require("../../assets/img/icon/car.svg"),
            alt: "car_img"
          }
        },
        {
          name: "Kamyonet",
          img: {
            src: require("../../assets/img/icon/van.svg"),
            alt: "van_img"
          }
        },
        {
          name: "Kamyon",
          img: {
            src: require("../../assets/img/icon/truck.svg"),
            alt: "truck_img"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-container {
  padding: 1rem 0;
}
.card {
  margin-left: 1rem;
}
.card:first-child {
  margin-left: 0;
}
.button-container,
.description-container {
  margin-top: 1rem;
}
</style>
