<template>
  <section class="paymentPage">
    <app-card>
      <slot slot="card-img">
        <img src="../assets/img/icon/money.svg" alt="money_icon" />
      </slot>
      <slot slot="card-text">
        Otoparkta kaldığınız süre için ödemeniz gereken tutar
        <span>{{ _self["getTotalPrice"] }}</span>
      </slot>
    </app-card>
    <section class="button-container">
      <button class="btn btn-primary" @click="pay">Ödeme yap</button>
    </section>
    <div class="notification-container">
      <transition name="fade" mode="out-in">
        <div v-if="isCustomerPay">
          <app-notification :type="'alert-success'">
            Ödeme yaptığınız için teşekkür ederiz.
            <span>{{ timer }}</span> Saniye içerisinde ana sayfaya
            yönlendirileceksiniz.
          </app-notification>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "./cards/Card";
import router from "../router";
export default {
  components: {
    appCard: Card
  },
  computed: {
    ...mapGetters(["getTotalPrice"])
  },
  data() {
    return {
      isCustomerPay: false,
      timer: 3
    };
  },
  methods: {
    pay() {
      this.$store.commit("setTotalPrice", "0 TL");
      this.isCustomerPay = true;

      setTimeout(() => {
        router.push("/");
      }, 3000);

      setInterval(() => {
        this.timer -= 1;
      }, 1000);
    }
  }
};
</script>

<style>
.paymentPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
span {
  color: crimson;
}
.button-container {
  margin-top: 1rem;
}
.card {
  cursor: auto !important;
}
.card:hover {
  box-shadow: 0 0 0 0 #fff !important;
}
.notification-container {
  margin-top: 1rem;
  height: 50px;
}
.fade-enter-active {
  animation: fade-in 0.5s ease-in-out;
}
.fade-leave-active {
  animation: fade-out 0.5s ease-in-out;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
