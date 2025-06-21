<script setup lang="ts">
import { ref, computed } from "vue";
import type { IPizza } from "../../interfaces/IPizza";
import type { ISize } from "../../interfaces/ISize";
import type { IToppings } from "../../interfaces/IToppings";
import '@/components/styles/checkout.css';

// Props for receiving data order from parent
const props = defineProps<{
  order: {
    pizza: IPizza | null;
    size: ISize | null;
    toppings: IToppings[];
  };
}>();


// Emits for sending showing success message
const emit = defineEmits(["order-success"]);

// Function for showing success message
function handleOrderSuccess() {
  emit("order-success");
}

// Function to get price from pizza order
function getPizzaPrice() {
  return props.order.pizza?.discount.final_price || 0;
}

// Function to get extra price from size
function getSizePrice() {
  return props.order.size?.extra_price || 0;
}

// Function to get toppings price
function getToppingsPrice() {
  return props.order.toppings.reduce((sum, t) => sum + (t.price || 0), 0);
}

// Function to get total price
function getTotalPrice() {
  return getPizzaPrice() + getSizePrice() + getToppingsPrice();
}
</script>

<template>
  <div class="fn-checkout-content">
    <div class="fn-checkout-summary">
      <h2>Payment Summary</h2>
      <div class="fn-checkout-details">
        <div class="fn-checkout-item">
          <h3 v-if="props.order.pizza">{{ props.order.pizza.name }}</h3>
          <p v-if="props.order.pizza">${{ getPizzaPrice()}}</p>
        </div>
        <div class="fn-checkout-item">
          <h3 v-if="props.order.size">{{ props.order.size.name }}</h3>
          <p v-if="props.order.size">${{ getSizePrice()}}</p>
        </div>
        <div v-for="topping in props.order.toppings" :key="topping.id" class="fn-checkout-item">
          <h3>{{ topping.name }}</h3>
          <p>${{ (topping.price || 0) }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="fn-checkout-total">
      <h3>Total Price</h3>
      <p>${{ getTotalPrice().toFixed(2) }}</p>
    </div>
    <button :disabled="getTotalPrice() === 0" @click="handleOrderSuccess"><p>Order Now</p></button>
  </div>
</template>
