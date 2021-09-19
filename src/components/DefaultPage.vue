<template>
  <main class="card-container d-flex align-items-center justify-content-center">
    <!--______ VEHICLE TYPE ______-->
    <section
      v-if="selectedVehicleType === ''"
      class="vehicle-types d-flex align-items-center justify-content-center"
      style="flex-direction:column;"
    >
      <section class="d-flex align-items-center justify-content-center">
        <app-vehicle-card
          class="card"
          v-for="(vehicle, index) in vehicles"
          :key="index"
          @click.native="selectedVehicleType = vehicle.type"
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
    </section>
    <!--______ PARK FEES ______-->
    <section
      v-else
      class="vehicle-types d-flex align-items-center justify-content-center"
      style="flex-direction:column;"
    >
      <section class="d-flex align-items-center justify-content-center">
        <app-vehicle-card
          class="card"
          v-for="(hour, index) in hours"
          :key="index"
          @click.native="calculateTotalFee(hour.value)"
        >
          <slot slot="card-text"> {{ hour.displayValue }} </slot>
        </app-vehicle-card>
      </section>
      <section class="description-container">
        <h3>Lütfen Aracınızın Parkta Kaç Saat Kalacağını Seçiniz</h3>
      </section>
    </section>
  </main>
</template>

<script>
import VehicleCard from "./cards/Card";
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
            src: require("../assets/img/icon/motorcycle.svg"),
            alt: "motorcycle_img"
          },
          type: "motorcycle"
        },
        {
          name: "Otomobil",
          img: {
            src: require("../assets/img/icon/car.svg"),
            alt: "car_img"
          },
          type: "car"
        },
        {
          name: "Kamyonet",
          img: {
            src: require("../assets/img/icon/van.svg"),
            alt: "van_img"
          },
          type: "van"
        },
        {
          name: "Kamyon",
          img: {
            src: require("../assets/img/icon/truck.svg"),
            alt: "truck_img"
          },
          type: "truck"
        }
      ],
      hours: [
        { displayValue: "0 ~ 1 Saat", value: "hours_0_1" },
        { displayValue: "1 ~ 3 Saat", value: "hours_1_3" },
        { displayValue: "3 ~ 5 Saat", value: "hours_3_5" },
        { displayValue: "Tam Gün", value: "fullDay" }
      ],
      multipliers: {},
      selectedVehicleType: "",
      hourlyWage: {}
    };
  },
  methods: {
    async getVehicleTypes() {
      await this.$store.dispatch("vehicle/getVehicleTypes");
      const data = this.$store.getters["vehicle/getVehicles"];
      this.multipliers = { ...data };
    },
    async getFees() {
      await this.$store.dispatch("fee/getParkFees");
      const data = this.$store.getters["fee/getParkFees"];
      this.hourlyWage = { ...data };
    },
    calculateTotalFee(selectedHour) {
      const hour = this.hourlyWage[selectedHour];
      let vehicle = this.selectedVehicleType;
      vehicle = this.multipliers[vehicle];

      let total = +hour * +vehicle;
      total += " TL";
      this.$store.commit("setTotalPrice", total);
    }
  },
  created() {
    this.getVehicleTypes();
    this.getFees();
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
