<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import fnpizzacard from "./FNPizzaCard.vue";
import fnpizzasizes from "./FNPizzaSize.vue";
import fnpizzatps from "./FNPizzaTps.vue";
import type { IToppings } from "../../interfaces/IToppings";
import type { ISize } from "../../interfaces/ISize";
import type { IPizza } from "../../interfaces/IPizza";
import pizzaData from "@/assets/json/pizza-list.json";
import sizeData from "@/assets/json/size-list.json";
import toppingsData from "@/assets/json/topping-list.json";
import '@/components/styles/mainContent.css';


// Dynamically import all SVG images from the images folder
const pizzaImages = import.meta.glob("@/assets/images/*.svg", { eager: true, as: "url" });

function getPizzaImage(name: string) {
  // Try to find the image by pizza name
  const key = Object.keys(pizzaImages).find((k) => k.endsWith(`/${name}.svg`));
  return key ? (pizzaImages as Record<string, string>)[key] : "";
}

// Refs to store selected pizza, size, and toppings
const selectedCard = ref(0);
const selectedSize = ref<ISize | null>(null);
const selectedPizza = ref<IPizza | null>(null);
const selectedToppings = ref<IToppings[]>([]);


// ref to store all pizza, size, and toppings
const pizzaList = ref<IPizza[]>([]);
const sizeList = ref<ISize[]>([]);
const toppingList = ref<IToppings[]>([]);

// emit selected pizza, size, and toppings
const emit = defineEmits(["update-order"]);

// watch selected pizza, size, and toppings
watch(
  [selectedPizza, selectedSize, selectedToppings],
  () => {
    emit("update-order", {
      pizza: selectedPizza.value,
      size: selectedSize.value,
      toppings: selectedToppings.value,
    });
  },
  { immediate: true }
);

// get all pizza, size, and  available toppings
onMounted(() => {
  toppingList.value = (toppingsData as { data: IToppings[] }).data;
  sizeList.value = (sizeData as { data: ISize[] }).data;
  pizzaList.value = (pizzaData as { data: IPizza[] }).data.map((pizza) => ({
    ...pizza,
    toppings: (pizza.toppings as number[])
      .map((toppingId: number) => toppingList.value.find((t: IToppings) => t.id === toppingId))
      .filter((t): t is IToppings => !!t),
  })) as IPizza[];
});

// Only allow toppings that are in the selected pizza's toppings
const allowedToppingIds = computed<number[]>(() => {
  if (!selectedPizza.value) return [];
  return (selectedPizza.value.toppings as IToppings[]).map((t) => t.id);
});

// Toggle topping selection
function toggleTopping(id: number) {
  if (!allowedToppingIds.value.includes(id)) return;
  const topping = toppingList.value.find((t) => t.id === id);
  if (!topping) return;
  const index = selectedToppings.value.findIndex((t) => t.id === id);
  if (index === -1) {
    selectedToppings.value.push(topping);
  } else {
    selectedToppings.value.splice(index, 1);
  }
}

// Function to save the selected pizza, size, and toppings and select a pizza
function selectPizza(pizza: IPizza) {
  selectedCard.value = pizza.id;
  selectedPizza.value = pizza;
  selectedSize.value = sizeList.value.length > 0 ? sizeList.value[0] : null;
  selectedToppings.value = [];
}

// Select a pizza for default size (small) 
function selectSize(sizeName: string | number) {
  const nameStr = String(sizeName);
  const size = sizeList.value.find((s) => s.name.toLowerCase() === nameStr.toLowerCase());
  if (size) {
    selectedSize.value = size;
  }
}
</script>

<template>
  <div class="fnpizza-content">
    <section class="fnpizza-list">
      <h2>Choose your pizza</h2>
      <div class="fnpizza-list-items">
        <fnpizzacard
          v-for="pizza in pizzaList"
          :key="pizza.id"
          :id="pizza.id"
          :name="pizza.name"
          :price="pizza.price"
          :discount="pizza.discount"
          :toppings="pizza.toppings"
          :isBadge="pizza.discount.is_active"
          :isSelected="selectedCard === pizza.id"
          @click="selectPizza(pizza)"
        >
          <template #fn-pizza-image>
            <img :src="getPizzaImage(pizza.name)" :alt="pizza.name" />
          </template>
        </fnpizzacard>
      </div>
    </section>
    <section class="fnpizza-custom">
      <h2>Custom Pizza</h2>
      <div class="fnpizza-custom-size">
        <h3>Size</h3>
        <div class="fnpizza-custom-size-list">
          <fnpizzasizes
            v-for="size in sizeList"
            :key="size.id"
            :name="size.name"
            :size="size.name"
            :value="size.name.toLowerCase()"
            :extra_price="size.extra_price"
            :modelValue="selectedSize?.name.toLowerCase()"
            @update:modelValue="selectSize($event)"
          />
        </div>
      </div>
      <div class="fnpizza-custom-toppings">
        <h3>Toppings</h3>
        <div class="fnpizza-custom-toppings-list">
          <fnpizzatps
            v-for="topping in toppingList"
            :key="topping.id"
            :id="topping.id"
            :name="topping.name"
            :price="topping.price"
            :isSelected="selectedToppings.some((t) => t.id === topping.id)"
            :isDisabled="!!selectedPizza && !allowedToppingIds.includes(topping.id)"
            @click="toggleTopping(topping.id)"
          >
            <template #topping-name>{{ topping.name }}</template>
          </fnpizzatps>
        </div>
      </div>
    </section>
  </div>
</template>