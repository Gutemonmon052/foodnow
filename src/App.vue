<script setup lang="ts">
import navbar from "./components/content/header/FNNavbar.vue";
import jumbotron from "./components/content/header/FNJumbotron.vue";
import pizza from "./components/content/main/FNPizza.vue";
import checkout from "./components/content/main/FNCheckout.vue";
import FNFooter from "./components/content/footer/FNFooter.vue";
import FNModal from "./components/content/FNModal.vue";
import { ref } from "vue";
import type { IPizza } from "./components/interfaces/IPizza";
import type { ISize } from "./components/interfaces/ISize";
import type { IToppings } from "./components/interfaces/IToppings";
import type { IOrder } from "./components/interfaces/IOrder";

const order = ref({
  pizza: null as IPizza | null,
  size: null as ISize | null,
  toppings: [] as IToppings[],
});

const showModal = ref(false);

function updateOrder(newOrder: IOrder): void {
  order.value = newOrder;
  console.log(order.value);
}

function handleOrderSuccess(): void {
  showModal.value = true;
}
</script>

<template>
  <header>
    <navbar />
    <jumbotron />
  </header>
  <main>
    <div class="fn-content">
      <pizza @update-order="updateOrder" />
      <checkout
        :order="order"
        @order-success="
          () => {
            handleOrderSuccess();
          }
        "
      />
    </div>
  </main>
  <footer>
    <FNFooter />
  </footer>
  <FNModal v-if="showModal" @close-modal="showModal = false">
    <template #fn-modal-icon>
      <img src="@/assets/images/icons/success.svg" alt="Action Icon" />
    </template>
    <template #fn-modal-title>Order Success</template>
    <template #fn-modal-text>Thank you, we have received your order successfully.</template>
  </FNModal>
</template>
