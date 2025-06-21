<script setup lang="ts">
import type { IPizza } from "../../interfaces/IPizza";
import type { ISize } from "../../interfaces/ISize";
import '@/components/styles/pizzaCard.css';
import { computed, ref } from "vue";


// Props for receiving data
const props = defineProps<
  IPizza & { isBadge?: boolean; isSelected?: boolean; isDisabled?: boolean }
>();

// convert price to currency (USD)
const dollar = computed(
  () =>
    props.discount.final_price.toLocaleString("en-US", { style: "currency", currency: "USD" }) ?? ""
);

const oldDollar = computed(
  () => props.price.toLocaleString("en-US", { style: "currency", currency: "USD" }) ?? ""
);

// Reactive state for selection
const isActive = ref(false);
const isSelected = computed(() => props.isSelected ?? false);

// Function for handle click when pizza is selected
function handleClick() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <label class="fn-pizza-card" :class="{ active: isSelected }">
    <input
      type="radio"
      name="pizza-size"
      :checked="isSelected"
      style="display: none"
      @change="handleClick"
      :disabled="isDisabled"
    />
    <div class="fn-pizza-card-content">
      <div v-if="props.discount.is_active" class="pizza-badge">
        <img src="@/assets/images/ribbon.svg" alt="badge" />
      </div>
      <div class="pizza-image">
        <slot name="fn-pizza-image"></slot>
      </div>
      <div class="fn-pizza-details">
        <h3>
          <slot name="fn-pizza-name">{{ name }}</slot>
        </h3>
        <p class="fn-pizza-price">
          <slot name="fn-pizza-price"
            >{{ dollar }}
            <span class="fn-pizza-old-price" v-if="props.discount.is_active">
              <slot name="fn-pizza-old-price">{{ oldDollar }}</slot>
            </span>
          </slot>
        </p>
      </div>
    </div>
  </label>
</template>